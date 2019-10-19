import React, { Component } from 'react';
import { Parallax } from "react-parallax";

// const image1 = "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//       image2 = "https://images.unsplash.com/photo-1543418219-44e30b057fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//       image3 = "https://images.unsplash.com/photo-1526137630052-dc2c4693f0d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//       image4 = "https://images.unsplash.com/photo-1464638681273-0962e9b53566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

class HomePage extends React.Component {
  constructor(props) {
  super(props);
  this.state={
      image1 : "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      image2 : "https://images.unsplash.com/photo-1543418219-44e30b057fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      image3 : "https://images.unsplash.com/photo-1526137630052-dc2c4693f0d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      image4 : "https://images.unsplash.com/photo-1464638681273-0962e9b53566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      height : 500
  }
}
  
  render() {

    // return (

    // <div style={styles}>
   
    // <Parallax bgImage={image1} strength={500}>
    //   <div style={{ height: 500 }}>
    //     {/* <div style={insideStyles}>HTML inside the parallax</div> */}
    //   </div>
    // </Parallax>
    // <h1>| | |</h1>
    // <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
    //   <div style={{ height: 500 }}>
    //     <div style={insideStyles}>Dynamic Blur</div>
    //   </div>
    // </Parallax>
    // <h1>| | |</h1>
    // <Parallax bgImage={image2} strength={-100}>
    //   <div style={{ height: 500 }}>
    //     <div style={insideStyles}>Reverse direction</div>
    //   </div>
    // </Parallax>
    // <h1>| | |</h1>
    // <Parallax
    //   bgImage={image4}
    //   strength={200}
    //   renderLayer={percentage => (
    //     <div>
    //       <div
    //         style={{
    //           position: "absolute",
    //           background: `rgba(255, 125, 0, ${percentage * 1})`,
    //           left: "50%",
    //           top: "50%",
    //           borderRadius: "50%",
    //           transform: "translate(-50%,-50%)",
    //           width: percentage * 500,
    //           height: percentage * 500
    //         }}
    //       />
    //     </div>
    //   )}
    // >
    //   <div style={{ height: 500 }}>
    //     <div style={insideStyles}>renderProp</div>
    //   </div>
    // </Parallax>
    // <div style={{ height: 500 }} />
    // <h2>{"\u2728"}</h2>
    // </div> )

    const {image1, image2, image3, image4, height} = this.state;

    return (
        <div className="main">
          <h1>Domaine de la vigne heureuse</h1>
            <Parallax bgImage={image1} strength={500}>
                {/* height is a style property an must be wrapped in 2 braces */}
              <div style={{height: height+200}}>
                <div style={insideStyles}><h1>Domaine de la vigne heureuse</h1></div>
              </div>
            </Parallax>
          <h1>text</h1>
            <Parallax bgImage={image2} strength={500}>
              <div style={{height}}></div>
            </Parallax>
          <h1>text</h1>
            <Parallax bgImage={image3} strength={500}>
              <div style={{height}}></div>
            </Parallax>
        </div>   
    );
  }
}

export default HomePage;

