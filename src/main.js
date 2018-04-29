import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from "./doctor-lookup";


$().ready(function () {
  let output = '';
  let doc = new Doctor();
  let key = process.env.exports.apiKey;
  let googleApiKey = process.env.exports.googleApiKey;

  doc.getSpecialties(key).then(function (response) {
    let res = JSON.parse(response);
    res.data.forEach(element => {
      $("#specialties").append(`<option value=${element.uid}>${element.uid}</option>`);
    });
  });


  $("#search").submit(function (e) {
    e.preventDefault();
    let name = $("#name").val();
    let issue = $("#issue").val();
    let location = $("#location").val();
    let specialties = $("#specialties option:selected").val();
    if(!name){
      name = 'Susan';
    }
    if(!location){
      location = 'portland, oregon';
    }


    doc.getGeometry(location, googleApiKey).then(function (data) {
      let response = JSON.parse(data);
      let lat = response.results[0].geometry.location.lat;
      let lng = response.results[0].geometry.location.lng;
      let user_location = `${lat}, ${lng}`;
      return doc.getDoctors(key, issue, user_location, name, specialties);
    }).then(function (response) {
      let dataJ = JSON.parse(response);
      if (dataJ.meta.total < 1) {
        output = 'No such thing exists';
      } else {
        dataJ.data.forEach(function (doc) {
          output += `<div class="row">
                      <div class=col-12>
                        <p>Name: ${doc.profile.first_name} ${doc.profile.last_name}<p>
                        <p>Address: ${doc.practices[0].visit_address.street}, ${doc.practices[0].visit_address.city}, ${doc.practices[0].visit_address.state}, ${doc.practices[0].visit_address.zip}<p>`
          output += `<p>Accepts new patients: `;
          if (doc.practices[0].accepts_new_patients) {
            output += `Yes</p>`;
          } else {
            output += `No </p>`;
          }

          if (doc.practices[0].phones.phoneNumber) {
            output += `<p>Phone: ${doc.practices[0].phones.phoneNumber}<p>`
          }
          if (doc.practices[0].website) {
            output += `<p>Phone: ${doc.practices[0].website}<p>`
          }

          output += `<p>Title: ${doc.profile.title}<p>
                        <p>Bio: ${doc.profile.bio}<p>
                      </div>
                    </div><hr>`

        });
      }
    });

    $(".output").html(output);
  });

});