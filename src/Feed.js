import React from "react";

function Post(props) {
  const initialIconLikeStatus = (
    <ion-icon className="teste" name="heart-outline"></ion-icon>
  );

  const initialSavedStatus = <ion-icon name="bookmark-outline"></ion-icon>;

  const [likeStatus, setLikeStatus] = React.useState(false);
  const [iconLikeStatus, setIconLikeStatus] = React.useState(
    initialIconLikeStatus
  );

  const [refreshedLikesQuantity, setLikeQuantity] = React.useState(
    props.likesQuantity
  );

  const [savedStatus, setSavedStatus] = React.useState(false);
  const [iconSavedStatus, setIconSavedStatus] =
    React.useState(initialSavedStatus);

  function toggleLikeStatus() {
    const newLikeStatus = !likeStatus;

    setLikeStatus(newLikeStatus);
    setIconLikeStatus(RefreshPostLikeStatus(newLikeStatus));
    setLikeQuantity(RefreshLikesQuantity(newLikeStatus));
  }

  function RefreshPostLikeStatus(newLikeStatus) {
    if (newLikeStatus) {
      return (
        <ion-icon className="teste" name="heart" color="danger"></ion-icon>
      );
    } else {
      return <ion-icon className="teste" name="heart-outline"></ion-icon>;
    }
  }

  function RefreshLikesQuantity(newLikeStatus) {
    if (newLikeStatus) {
      const newLikesQuantity = Number(refreshedLikesQuantity) + 1;
      return newLikesQuantity;
    } else {
      const newLikesQuantity = Number(refreshedLikesQuantity) - 1;
      return newLikesQuantity;
    }
  }

  function ToggleSavedStatus() {
    const newSavedStatus = !savedStatus;
    console.log(newSavedStatus);

    setSavedStatus(newSavedStatus);
    console.log(savedStatus);
    setIconSavedStatus(RefreshIconSavedStatus(newSavedStatus));
  }

  function RefreshIconSavedStatus(newSavedStatus) {
    if (newSavedStatus) {
      return <ion-icon name="bookmark"></ion-icon>;
    } else {
      return <ion-icon name="bookmark-outline"></ion-icon>;
    }
  }

  return (
    <li className="post">
      <div className="tittle">
        <img className="story-icon" src={props.image} />
        <p className="font-feed-profile-name">{props.name}</p>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
      <div className="image">
        <img onClick={toggleLikeStatus} src={props.postContent} />
      </div>
      <div className="reactions">
        <div className="initial-reactions">
          <div onClick={toggleLikeStatus}>{iconLikeStatus}</div>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div onClick={ToggleSavedStatus}>{iconSavedStatus}</div>
      </div>
      <div className="likes">
        <img src={props.likesEmphasisImage} />
        <p className="font-feed-reactions">
          Curtido por <b>{props.likesEmphasisName}</b> e{" "}
          <b>outras {refreshedLikesQuantity} pessoas</b>
        </p>
      </div>
    </li>
  );
}

export default function Feed() {
  const feedList = [
    {
      image: "/assets/storie5.jpg",
      name: "Ursinho",
      postContent: "/assets/post1.jpg",
      likesEmphasisImage: "/assets/storie2.jpg",
      likesEmphasisName: "cabeludo",
      likesQuantity: "245",
    },
    {
      image: "/assets/storie5.jpg",
      name: "Ursinho",
      postContent: "/assets/post1.jpg",
      likesEmphasisImage: "/assets/storie2.jpg",
      likesEmphasisName: "cabeludo",
      likesQuantity: "245",
    },
    {
      image: "/assets/storie5.jpg",
      name: "Ursinho",
      postContent: "/assets/post1.jpg",
      likesEmphasisImage: "/assets/storie2.jpg",
      likesEmphasisName: "cabeludo",
      likesQuantity: "245",
    },
  ];

  return (
    <ul className="feed">
      {feedList.map((item) => (
        <Post
          image={item.image}
          name={item.name}
          postContent={item.postContent}
          likesEmphasisImage={item.likesEmphasisImage}
          likesEmphasisName={item.likesEmphasisName}
          likesQuantity={item.likesQuantity}
        />
      ))}
    </ul>
  );
}
