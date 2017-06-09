var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },

  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];
for (var i = 0; i < formData.length; i++) {
  let form = document.querySelector("form")
  let obj = formData[i];
  let text;
  let icon;
  if(obj.icon){
      icon = document.createElement('i');
      icon.classList.add("fa");
      icon.classList.add(obj.icon);

  form.appendChild( icon);
      console.log(icon);}
  if (obj.options.length === 0) {
    text = '<input class="look-pretty" type="' + obj.type + '" id="' + obj.id + '" placeholder="' + obj.label +'">'
  }
  else{
    text = '<select name = "select language" class="look-pretty" options="' + obj.options[0].label +'" type="' + obj.type + '" id="' + obj.id + '" placeholder="' + obj.label +'">'
  }
  form.insertAdjacentHTML("beforeend", text);
}

let user_lang = document.querySelector("#user-language");
let select_lang = '<select name= "select language" ><option value="" disabled selected hidden> select language...  </option><option value="EN">English</option><option value="FR">French</option><option value="SP">Spanish</option><option value="CH">Chinese</option><option value="JP">Japanese</option></select>'
let lang= user_lang.insertAdjacentHTML("beforeend", select_lang);




// let form = document.querySelector(".form_page");
// let first= form.insertAdjacentHTML("beforeend", '<input type="text" id ="user-first-name" placeholder="First Name">');
// let last = form.insertAdjacentHTML("beforeend", '<input type="text" id ="user-last-name" placeholder="last Name">');
// let email= form.insertAdjacentHTML("beforeend", '<input type="email" id ="user-email" placeholder="Email address">');
// let website= form.insertAdjacentHTML("beforeend", '<input type="text" id ="user-website" placeholder="Current website url">');

// let comment= form.insertAdjacentHTML("beforeend", '<input type="textarea" id ="user-comment" placeholder="your comment">');
// let mobile= form.insertAdjacentHTML("beforeend", '<input type="tel" id ="user-mobile" placeholder="mobile number">');
// let home = form.insertAdjacentHTML("beforeend", '<input type="tel" id ="user-phone" placeholder="home Number">');