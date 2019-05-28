import React from "react";
import "./Post.scss";

export default function Post() {
  const onClick = event => {
    event.target.style.borderBottom = "solid 3px #5c6bc0";
    event.target.style.fontWeight = "bold";
    if (event.target.parentNode.children[1] !== event.target) {
      event.target.parentNode.children[1].style.borderBottom =
        "solid 1px black";
      event.target.parentNode.children[1].style.fontWeight = "normal";
    } else {
      event.target.parentNode.children[0].style.borderBottom =
        "solid 1px black";
      event.target.parentNode.children[0].style.fontWeight = "normal";
    }
  };
  return (
    <div className="post">
      <div className="post-header">
        <div className="button-top">I Do Reflect</div>
      </div>
      <span className="date">Sep 11</span>
      <div className="post-main">
        <h1>
          Democracy means simply the bludgeoning of the people by the people for
          the people.
        </h1>

        <img src="https://via.placeholder.com/200x300" alt="" />
        <p className="main-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
          risus vitae felis blandit iaculis. Pellentesque at porttitor eros.
          Fusce posuere nunc sed massa rhoncus, at tincidunt justo viverra.
          Etiam finibus est in quam laoreet condimentum non vitae diam. Donec
          eget velit quis ante tempus imperdiet. Etiam sit amet maximus mi, ac
          tincidunt ex. In dui mauris, consequat porttitor felis quis, bibendum
          consequat felis. Morbi maximus, dolor sit amet vulputate laoreet,
          felis nisi ornare enim, sed sagittis dolor libero non sapien. Duis
          dolor enim, tempor eget mattis at, posuere id ipsum.
          <span className="special">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
            risus vitae felis blandit iaculis. Pellentesque at porttitor eros.
            Fusce posuere nunc sed massa rhoncus, at tincidunt justo viverra.
          </span>
          Aliquam quis cursus lorem. Aliquam in quam vitae orci mollis porttitor
          sit amet at augue. Phasellus condimentum pellentesque felis volutpat
          eleifend. Quisque varius sapien id ex ultricies venenatis. Fusce
          scelerisque, orci eget aliquet euismod, nulla mauris finibus nunc, nec
          euismod sem magna sed leo. Nam blandit maximus ante, ut finibus purus.
          Nullam eget cursus elit, vel semper arcu. Morbi tristique purus eget
          massa porta, nec fermentum elit scelerisque. Etiam elementum turpis ac
          ligula fringilla molestie. Donec finibus sodales nunc, at scelerisque
          enim fringilla nec. Aenean ut egestas neque. Phasellus sed facilisis
          tortor. Sed elementum nunc at elit molestie lobortis. Pellentesque
          convallis faucibus nibh, quis consectetur sapien feugiat eget. Sed sed
          eleifend magna. Aliquam quis cursus lorem. Aliquam in quam vitae orci
          mollis porttitor sit amet at augue. Phasellus condimentum pellentesque
          felis volutpat eleifend. Quisque varius sapien id ex ultricies
          venenatis. Fusce scelerisque, orci eget aliquet euismod, nulla mauris
          finibus nunc, nec euismod sem magna sed leo. Nam blandit maximus ante,
          ut finibus purus. Nullam eget cursus elit, vel semper arcu. Morbi
          tristique purus eget massa porta, nec fermentum elit scelerisque.
          Etiam elementum turpis ac ligula fringilla molestie. Donec finibus
          sodales nunc, at scelerisque enim fringilla nec. Aenean ut egestas
          neque. Phasellus sed facilisis tortor. Sed elementum nunc at elit
          molestie lobortis. Pellentesque convallis faucibus nibh, quis
          consectetur sapien feugiat eget. Sed sed eleifend magna. Aliquam quis
          cursus lorem. Aliquam in quam vitae orci mollis porttitor sit amet at
          augue. Phasellus condimentum pellentesque felis volutpat eleifend.
          Quisque varius sapien id ex ultricies venenatis. Fusce scelerisque,
          orci eget aliquet euismod, nulla mauris finibus nunc, nec euismod sem
          magna sed leo. Nam blandit maximus ante, ut finibus purus. Nullam eget
          cursus elit, vel semper arcu. Morbi tristique purus eget massa porta,
          nec fermentum elit scelerisque. Etiam elementum turpis ac ligula
          fringilla molestie. Donec finibus sodales nunc, at scelerisque enim
          fringilla nec. Aenean ut egestas neque. Phasellus sed facilisis
          tortor. Sed elementum nunc at elit molestie lobortis. Pellentesque
          convallis faucibus nibh, quis consectetur sapien feugiat eget. Sed sed
          eleifend magna.
        </p>
        <hr />
        <div className="disqusion">
          <div className="comments">
            <span onClick={onClick}>0 comments</span>
            <span onClick={onClick}>pixelBuddha</span>
          </div>
          <input placeholder="Add a comment..." />
        </div>
      </div>
    </div>
  );
}
