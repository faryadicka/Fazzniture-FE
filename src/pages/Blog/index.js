import React, { Component } from 'react'
import "./Blog.css"
import Navbar from "../../components/Navbar"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Category from "./Category.js";
import Recent from "./Recent";
import Archives from "./Archives";
import Tags from "./Tags";
import Contents from "./Content";
import Pagination from "./Pagination";



export class index extends Component {
  state = {
    content: [
      { pict: require("../../assets/img/image-7.png"), title: "How to open interior shop?", date: "24 Apr 2019, 45 mins ago, by Admin", tags: "Kids, Interior, Photos", content: "Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibu.", link: "/blog/details/1", id: 1 },
      { pict: require("../../assets/img/image-8.png"), title: "Scandinavian Style 2019", date: "24 Apr 2019, 45 mins ago, by Admin", tags: "Kids, Interior, Photos", content: "Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibu.", link: "/blog/details/2", id: 2 },
      { pict: require("../../assets/img/image-9.png"), title: "Beautiful Workspace for Designer", date: "24 Apr 2019, 45 mins ago, by Admin", tags: "Kids, Interior, Photos", content: "Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibu.", link: "/blog/details/3", id: 3 },
      { pict: require("../../assets/img/image-10.png"), title: "26 Photos of Conner Kid", date: "24 Apr 2019, 45 mins ago, by Admin", tags: "Kids, Interior, Photos", content: "Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibu.", link: "/blog/details/4", id: 4 },
      { pict: require("../../assets/img/image-11.png"), title: "Beautiful Corner", date: "24 Apr 2019, 45 mins ago, by Admin", tags: "Kids, Interior, Photos", content: "Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibu.", link: "/blog/details/5", id: 5 },
    ]
  }

  componentDidMount() {
    window.document.title = "Blog";
  }
  render() {
    return (
      <div>
        <Navbar page="blog" />
        <Header section="Blog" title="Our Blog" desc="Read and enjoy content from us" />
        <div className='blog'>
          <div className='blog-side'>
            <div className='blog-search-container'>
              <input type="text" placeholder='Search' className='blog-search' />
              <img src={require("../../assets/vector/Vector-Search-Grey.png")} alt="Search" className="blog-search-logo" />
            </div>
            <Category />
            <Recent />
            <Archives />
            <Tags />
            <img src={require("../../assets/img/image-6.png")} alt="add banner" className='blog-add' />
          </div>
          <div className='blog-main'>
            {this.state.content.map((item) => {
              return <Contents pict={item.pict} title={item.title} date={item.date} tags={item.tags} content={item.content} link={item.link} key={item.id} />
            })}
            <Pagination />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default index