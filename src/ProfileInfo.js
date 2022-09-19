import React from "react";

export default function ProfileInfo() {
  const [name, setName] = React.useState("catsareawesome");
  const [subname, setSubname] = React.useState("Felis Catus");

  function InputName() {
    const name = prompt("Insira o nome do perfil");
    setName(name);
    InputSubname();
  }

  function InputSubname() {
    const subname = prompt("Insira o subnome do perfil");
    setSubname(subname);
  }

  return (
    <div class="profile-infos">
      <img src="/assets/profile-photo.jpg" />
      <div class="profile-name">
        <p class="font-personal-profile">{name}</p>
        <p class="font-personal-profile-sub">{subname}</p>
      </div>
      <ion-icon
        class="edit-name"
        onClick={InputName}
        name="create-outline"
      ></ion-icon>
    </div>
  );
}