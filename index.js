const  allBlog = document.querySelector('.all-blog .all-blog-row')
const allTotalBox = document.querySelector('.row')

const totleBox_1 = document.querySelector('.c_1 h2')
const totleBox_2 = document.querySelector('.c_2 h2')
const totleBox_3 = document.querySelector('.c_3 h2')
const totleBox_4 = document.querySelector('.c_4 h2')



fetch('blog_statistics.json')
.then(res => res.json())
.then(data =>{
totleBox_1.innerHTML =  data.statistics.totalBlogs
totleBox_2.innerHTML =  data.statistics.totalViews
totleBox_3.innerHTML =data.statistics.totalUsers
totleBox_4.innerHTML =data.statistics.totalCreator
})

async function getAllBlogData(){
     await fetch('blog.json')
     .then((res) =>res.json())
     .then(data => showBlog(data))
}

function showBlog(data){
    for(i = 0 ; i <=6 ; i++){
        let createBlogBx =  `
        <div class="all-blog-col">
        <a href="">
          <div class="image">
              <img src="./imgs/lifeStyle_1.jpg" alt="">
              <div class="category">${data[i].category}</div>
              <div class="content">
                  <h4>${data[i].title}</h4>
                  <p>${data[i].content}</p>
                  <div class="avatar">
                      <div class="image-avatar"><img src="./imgs/blogBanner.jpg" alt=""></div>
                      <p>${data[i].author}</p>
                  </div>
                   <a href="readBlog.html">Read More</a>
              </div>
          </div>
        </a>
        </div>
        `
        allBlog.innerHTML += createBlogBx
    }
}







window.addEventListener("load", (event) => {
    getAllBlogData()
  });


