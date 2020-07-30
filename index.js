document.addEventListener('DOMContentLoaded', function(){
    const name = document.querySelector('h1')
    const pic = document.querySelector('img')
    const container = document.querySelector('.main-container')

    document.addEventListener('change', (e) => {
        if (e.target.value === 'videos'){
            container.innerHTML = myVids
        } else if (e.target.value === 'blogs'){
            container.innerHTML = myBlogs
        } else if (e.target.value === 'education'){
            container.innerHTML = education
        } else if (e.target.value === 'work'){
            container.innerHTML = work
        } else {
            container.innerHTML = none
        }
    })

    const none = ''

    const work = `<div>
            <h3>Head of Production and Product Developemnt at Gina Group</h3>
            <p> what i  did there </p>
            <h3>Production Coordinaor at Amazon Apparel</h3>
            <p> what i  did there </p>
            <h3>Production Coordinaor at Mr Noah</h3>
            <p> what i  did there </p>
            <h3>Product Developemnt Assistant at Sequin</h3>
            <p> what i  did there </p>
            <h3>Product Developemnt Assistant at Alexis Bittar</h3>
            <p> what i  did there </p>
            <h3>Product Developemnt Assistant at Kate Spade</h3>
            <p> what i  did there </p>
            <h3>Jewelry Desiger Assistant at ILD</h3>
            <p> what i  did there </p>
        </div>`

    const education = `<div>
            <h3 class="text">Tufts University/School of the Museum of Fine Arts</h3>
            <p class="text">Bachelors Degree in Art History and Fine Arts</p>

            <h3 class='text'>Flatiron School</h3>
            <p class="text">Full Stack Web Development, Ruby on Rails and JavaScript program</p>

            <h3 class='text'>Fashion Institute of Technology</h3>
            <p class="text">Fashion Merchandising Buisness</p>
        </div>`

    const myVids = `<div>
            <div class="video">
                <iframe src="https://www.youtube.com/embed/tzsZxJwcoKI" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="video">
                <iframe src="https://www.youtube.com/embed/DdPL-dB-62A" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="video">
                <iframe src="https://www.youtube.com/embed/-kHoIrHSYFo" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="video">
                <iframe src="https://www.youtube.com/embed/euEMBbeC62U" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="video">
                <iframe src="https://www.youtube.com/embed/GsoBDg6MdR8" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>`

    const myBlogs = `<div>
        <div class="blog">
            <h3 class='title'>I passed every coding challenge at Flatiron School on the first try. Heres how!</h3>
            <a href='https://medium.com/@elizabeth.michael.karen/i-passed-every-coding-challenge-at-flatiron-school-on-the-first-try-heres-how-b11dfc19e6ad' target="_blank"><img src="https://miro.medium.com/max/1000/1*0uJ7juSeQnjsUC4UcmQJcA.gif" width="560" height="315"></a>
        </div>
        <div class="blog">
            <h3 class='title'>Binary Search Explained</h3> 
            <a href='https://medium.com/@elizabeth.michael.karen/binary-search-explained-b3c33d679dec' target="_blank"><img src="https://images.ctfassets.net/j0hmm71qn9y2/6z0UVKYPcE1BNY04iKxUEy/06b098484e982633b7f15969da85fa1c/Typeform-Blog-Gifs-Inline05.gif?w=640" width="560" height="315"></a>
        </div>
        <div class="blog">
            <h3 class='title'>Replacing While loops in Ruby</h3>
            <a href='https://medium.com/@elizabeth.michael.karen/replacing-while-loops-in-ruby-909994622723' target="_blank"><img src="https://media1.giphy.com/media/tKIt3zenrB7CgdRlI2/giphy.gif" width="560" height="315"></a>
        </div>
        <div class="blog">
            <h3 class='title'>Splice, Slice, and Split in JavaScript</h3> 
            <a href='https://medium.com/@elizabeth.michael.karen/splice-slice-and-split-in-javascript-acbda1a09e75' target="_blank"><img src="https://www.pajiba.com/assets_c/2018/09/sliceposter%202%20%281%29-thumb-700x618-201648.jpg" width="560" height="315"></a>
        </div>
        <div class="blog">
            <h3 class='title'>Case Statements in Ruby</h3> 
            <a href='https://medium.com/@elizabeth.michael.karen/case-statements-in-ruby-1034cb9a4414' target="_blank"><img src="https://miro.medium.com/max/1136/1*5hxbr6t7FcAJLgejLlK7LA.png" width="560" height="315"></a>
        </div>
    </div>`

    name.addEventListener('click', (e) => {
        if (e.target.id === 'header'){
            e.target.id = 'header2'
        } else if (e.target.id == 'header2'){
            e.target.id = 'header3'
        } else if (e.target.id === 'header3'){
            e.target.id = 'header'
        }
    })

    pic.addEventListener('click',(e) =>{
        const sushiPic = 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/45991353_10212866996014483_4082254848777519104_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=f85f-B4BxqUAX9SB6av&_nc_ht=scontent-lga3-1.xx&oh=3d37e0c28b307209b7e7be8b97127423&oe=5F46A524'
        const smilePic = 'https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/28161461_10211066462202263_862115397948204181_o.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=h--IM4VGYWgAX-FGbOu&_nc_ht=scontent-lga3-1.xx&oh=040f8c06ca02d1ac188f74d6a4501787&oe=5F457F86'
        if (e.target.src == smilePic){
            e.target.src = sushiPic
        } else {
            e.target.src = smilePic 
        }
    } )


 })
