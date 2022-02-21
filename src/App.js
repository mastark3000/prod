import React, { Component } from 'react';
// import { FaAlignRight } from 'react-icons/fa';
import Colors from './components/Colors';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Thumb from './components/ThumbDetails';

class App extends React.Component{
  state = {
    products : [
      {
        "_id" : "1",
        "title" : "Air Jordan 4",
        "src" : [
          "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/f0c6bdc2-b8fe-45f7-a76d-ae1bbf30e156/air-jordan-4-crimson-ct8527-016-release-date.jpg",
          "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/6e51459a-1ece-4b19-bc4c-5791fa08e372/air-jordan-4-crimson-ct8527-016-release-date.jpg",
          "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/f2017792-ad59-488f-a4f1-adf576d9aeea/air-jordan-4-crimson-ct8527-016-release-date.jpg",
          "https://static.nike.com/a/images/t_prod_sc/w_640,c_limit,f_auto/f0b00c17-4233-4323-a525-d7ef6cce40cf/air-jordan-4-crimson-ct8527-016-release-date.jpg"
        ],
        "description" : "The Air Jordan 4 first landed in 1989 and, decades later, its special details remain. The suede nubuck upper, mesh quarter panel and tongue bottom, and visible Air unit are back, but in a new colourway for the season. An all-black upper recalls OG styles while its Crimson accents to the mesh, midsole, eyestay and liner add a fiery, modern touch to a Jordan Brand classic.",
        "content" : "Nike shoes are the best shoes in the world",
        "price" : "15,995",
        "colors" : ["red", "blue", "green","black"],
        "counters" : 1
      }
    ],
     index : 0    
  };
  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({index : index});
    const images = this.myRef.current.children;  
    for(let i=0; i<images.length;i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
    // alert(index);
  }


  conmponentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }




  render() {
    const {products, index} = this.state;
    console.log(products); 

    return(
      <>
      < Navbar />

    
     <div className="App">
          {products.map(item => (
            <div className="details">
              <div className=".big-image">
                <img src={item.src[index]} alt="" />
              </div>
              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                </div>
                <div className="row">
                  <span>₹{item.price}</span>
                </div>
                {/* <Colors/> */}
                <div className="colors">
                  {
                      item.colors.map((color, index) => (
                    <button style={{ background: color }} key={index}></button>
                  ))
                  }
            </div>
                <p>{item.description}</p>
                <p>{item.content}</p>
                <Thumb/>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
        
        </>  
    );
  }
}
export default App;
