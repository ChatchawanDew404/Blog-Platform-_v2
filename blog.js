const showAllBlogContainer = document.querySelector('.show_all_blog_row')
const getInputSearchBlogValue = document.querySelector('.inputSearchBlog')
const selectCategoryBlog = document.querySelector('#selectCategoryBlog')


let getBlogData = []


fetch('blog.json')
.then(res => res.json())
.then(data =>{
    getBlogData = data.map((item) =>{
         const blogDataBox = 
         `
<div class="blog-col">
<a href="">
  <div class="image">
      <img src="./imgs/lifeStyle_1.jpg" alt="">
      <div class="category">${item.category}</div>
      <div class="content">
          <h4>${item.title}</h4>
          <p>${item.content}</p>
          <div class="avatar">
              <div class="image-avatar"><img src="./imgs/blogBanner.jpg" alt=""></div>
              <p>${item.author}</p>
          </div>
           <a href="readBlog.html">Read More</a>
      </div>
  </div>
</a>
</div>
`
        showAllBlogContainer.innerHTML +=  blogDataBox
        return {author:item.author,category:item.category,title:item.title}
    })


    // ---------- add option to selected html tag
    var uniqueValues = {};

    for (var i = 0; i < getBlogData.length; i++) {
        let item = getBlogData[i];
        let option = document.createElement("option");
        if (!uniqueValues[item.category]) {
            let option = document.createElement("option");
            option.value = item.category;
            option.text = item.category;
            selectCategoryBlog.appendChild(option);
            uniqueValues[item.category] = true;
        }

    }

//  --------- Select value in select html

})

getInputSearchBlogValue.addEventListener('input',(e)=>{
    const getValue = e.target.value.toLowerCase()

    let getAllBlog = document.querySelectorAll('.blog-col')


    getAllBlog.forEach((item) =>{
        console.log(item)
        let category = item.querySelector('.category').textContent
        let title = item.querySelector('h4').textContent
        let author = item.querySelector('.avatar p').textContent


        console.log(title,author,category)
        const checkValue =  title.toLowerCase().includes( getValue)||
        author.toLowerCase().includes( getValue)||
        category.toLowerCase().includes( getValue) 

    
            item.classList.toggle('hide',!checkValue)

    })
   
})


selectCategoryBlog.addEventListener('change',(e) =>{
    let getValue = document.querySelector('#selectCategoryBlog').value
    let getAllBlog = document.querySelectorAll('.blog-col')
    getAllBlog.forEach((item) =>{
        let category = item.querySelector('.category').textContent

        if(getValue == "all"){
            item.classList.remove('hide')
        }else if(getValue.toLocaleLowerCase() == category.toLocaleLowerCase()){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
})