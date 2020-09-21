document.addEventListener('DOMContentLoaded', function(){
    const container = document.querySelector('.main-container')
    const blogInput = document.querySelector('#blogs')
    const demoInput = document.querySelector('#video')
    const edInput = document.querySelector('#ed')
    const workInput = document.querySelector('#work')
    const algoInput = document.querySelector('#algos')
    const buttons = document.querySelector('#buttons')

    demoInput.style.color = 'gray'


    buttons.addEventListener('click', (e) => {
        e.target.style.color = 'gray';
        if (e.target.id === 'video'){
            container.innerHTML = myVids
            blogInput.style.color = '#000000';
            edInput.style.color = '#000000';
            workInput.style.color = '#000000';
            algoInput.style.color = '#000000';
        } else if (e.target.id === 'blogs'){
            container.innerHTML = myBlogs
            edInput.style.color = '#000000';
            workInput.style.color = '#000000';
            demoInput.style.color = '#000000';
            algoInput.style.color = '#000000';
        } else if (e.target.id === 'ed'){
            container.innerHTML = education
            blogInput.style.color = '#000000';
            workInput.style.color = '#000000';
            demoInput.style.color = '#000000';
            algoInput.style.color = '#000000';
        } else if (e.target.id === 'work'){
            container.innerHTML = work
            blogInput.style.color = '#000000';
            edInput.style.color = '#000000';
            demoInput.style.color = '#000000';
            algoInput.style.color = '#000000';
        } else if (e.target.id == 'algos'){
            container.innerHTML = algoVids
            blogInput.style.color = '#000000';
            edInput.style.color = '#000000';
            demoInput.style.color = '#000000';
            workInput.style.color = '#000000';
        }
    })

    const algoVids = `<div class='text'>
        <a href='https://github.com/Liz00000000000/interview_practice_questions' target="_blank">Interview Questions and Solutions Git Hub in Python</a>
        </div>`

    const work = `<div id='words' class='text'>
            <h3>Production and Product Development Manager at Gina Group</h3>
            <p>Worked with buyers and factory owners in China and India to provide a high-quality product at the lowest price possible</p>
            <h3>Production Coordinator at Amazon Apparel</h3>
            <p>Curated apparel department inside of Amazons vendor central</p>
            <h3>Production Coordinator at Mr Noah</h3>
            <p>Engineered detailed spec sheets for over a million dollars worth of apparel</p>
            <h3>Product Development Assistant at Sequin</h3>
            <p>Developed millions of dollars worth of merchandise</p>
            <h3>Product Development Assistant at Alexis Bittar</h3>
            <p>Created internal organizing system for all keep samples</p>
            <h3>Product Development Assistant at Kate Spade</h3>
            <p>Created organizing system for all seasons and styles</p>
            <h3>Jewelry Designer Assistant at ILD</h3>
            <p>Assisted with jewelry creation</p>
        </div>`

    const education = `<div id='words'>
            <h3 class="text">Tufts University/School of the Museum of Fine Arts</h3>
            <p class="text">Bachelors Degree in Art History and Fine Arts</p>

            <h3 class='text'>Flatiron School</h3>
            <p class="text">Full Stack Web Development, Ruby on Rails and JavaScript program</p>

            <h3 class='text'>Fashion Institute of Technology</h3>
            <p class="text">Fashion Merchandising Buisness</p>
        </div>`

    const myVids = `<div class="video">
    <h3>Flatsy Shops</h3>
        <iframe src="https://www.youtube.com/embed/tzsZxJwcoKI" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br>
        <a href='https://github.com/Liz00000000000/etsy_clone_front_end' target="_blank">React Front End</a>
        <a href='https://github.com/Liz00000000000/etsy_clone_back_end' target="_blank">Rails Back End</a>
    </div>
    
    <div class="video">
        <h3>So Not Facebook</h3>
        <iframe src="https://www.youtube.com/embed/euEMBbeC62U" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br>
        <a href='https://github.com/Liz00000000000/facebookclone_front_end' target="_blank">React Front End</a>
        <a href='https://github.com/Liz00000000000/facebookclone_real_backend' target="_blank">Rails Back End</a>
    </div>

    <div class="video">
        <h3>Psychic Reader Game</h3>
        <a href='https://psychicreading.netlify.app/' target="_blank"><img src="https://i.pinimg.com/564x/83/d5/f5/83d5f5a151ed5c3dce3e2d4b5af3a93f.jpg" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
        <br>
        <a href='https://psychicreading.netlify.app/' target="_blank">Demo</a>
        <a href='https://github.com/Liz00000000000/furtune_teller_game' target="_blank">React Code</a>
    </div>

    <div class="video">
    <h3>Flatiron Experience Board Game</h3>
        <iframe src="https://www.youtube.com/embed/DdPL-dB-62A" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br>
        <a href='https://github.com/chefvivica/flatiron_school_experience_front_end-' target="_blank">Vanilla JavaScript Front End</a>
        <a href='https://github.com/chefvivica/flatiron_school_experience-api' target="_blank">Rails Back End</a>
    </div>

    
    <div class="video">
        <h3>Recipe Share</h3>
        <iframe src="https://www.youtube.com/embed/GsoBDg6MdR8" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br>
        <a href='https://github.com/Liz00000000000/instaRecipe' target="_black">Rails Full Stack</a>
    </div>
    
    <div class="video">
        <h3>Yoga Midnight: Portfolio Site</h3>
        <a href='https://yogamidnight.netlify.app/' target="_blank"><img src="./Images/Matt.png" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
        <br>
        <a href='https://yogamidnight.netlify.app/' target="_black">Website</a>
        <a href='https://github.com/Liz00000000000/yogamidnight' target="_blank">React Code</a>
    </div>

    <div class="video">
    <h3>Covid Quest: A Game Inspired By Quaratine</h3>
        <iframe src="https://www.youtube.com/embed/-kHoIrHSYFo" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br>
        <a href='https://github.com/Liz00000000000/' target="_black">Ruby Terminal</a>
    </div>`

    const myBlogs = `<div class="blog">
        <h3 class="title">The Island Algorithm Explained</h3>
        <a href="https://medium.com/@elizabeth.michael.karen/the-island-algorithm-explained-60ab6bef682b?sk=9a5350c50a98eb9e7426918b5dfe0227" target="_blank"><img src="https://media1.tenor.com/images/6e8bef91a303b37079ae1c5ed2d0057c/tenor.gif?itemid=5702034" alt='island'  width="560" height="315"/></a>
        </div>

        <div class="blog">
        <h3 class="title">Linked Lists Explained</h3>
        <a href="https://medium.com/@elizabeth.michael.karen/linked-lists-explained-bd2e2edbde97?sk=94a0f607a97d52faee5dca708f6aaba9" target="_blank"><img src="https://miro.medium.com/max/1400/1*8cuob3zHwwxCN-qBUspJKQ.jpeg" alt='list'  width="560" height="315"/></a>
        </div>

        <div class='blog'>
        <h3 class="title">The Future of Wearable Tech</h3>
        <a href="https://medium.com/@elizabeth.michael.karen/the-future-of-wearable-tech-is-fitbit-only-the-beginning-9cc9fce0b31d?sk=f3caf8dbb8472daf9bbcb67968a35c7" target="_blank"><img src="https://i.gifer.com/U0b.gif" width="560" height="315"></a>
        </div>
    
        <div class="blog">
            <h3 class='title'>How I passed every code challenge on the first try!</h3>
            <a href='https://medium.com/@elizabeth.michael.karen/i-passed-every-coding-challenge-at-flatiron-school-on-the-first-try-heres-how-b11dfc19e6ad' target="_blank"><img src="https://miro.medium.com/max/1000/1*0uJ7juSeQnjsUC4UcmQJcA.gif" width="560" height="315"></a>
        </div>
        <div class="blog">
            <h3 class='title'>Binary Search Explained</h3> 
            <a href='https://medium.com/@elizabeth.michael.karen/binary-search-explained-b3c33d679dec' target="_blank"><img src="https://images.ctfassets.net/j0hmm71qn9y2/6z0UVKYPcE1BNY04iKxUEy/06b098484e982633b7f15969da85fa1c/Typeform-Blog-Gifs-Inline05.gif?w=640" width="560" height="315"></a>
        </div>
        <div class="blog">
            <h3 class='title'>Replacing While loops</h3>
            <a href='https://medium.com/@elizabeth.michael.karen/replacing-while-loops-in-ruby-909994622723' target="_blank"><img src="https://media1.giphy.com/media/tKIt3zenrB7CgdRlI2/giphy.gif" width="560" height="315"></a>
        </div>
        <div class="blog">
            <h3 class='title'>Splice, Slice, and Split</h3> 
            <a href='https://medium.com/@elizabeth.michael.karen/splice-slice-and-split-in-javascript-acbda1a09e75' target="_blank"><img src="https://www.pajiba.com/assets_c/2018/09/sliceposter%202%20%281%29-thumb-700x618-201648.jpg" width="560" height="315"></a>
        </div>
        <div class="blog">
            <h3 class='title'>Case Statements in Ruby</h3> 
            <a href='https://medium.com/@elizabeth.michael.karen/case-statements-in-ruby-1034cb9a4414' target="_blank"><img src="https://miro.medium.com/max/1136/1*5hxbr6t7FcAJLgejLlK7LA.png" width="560" height="315"></a>
        </div>`

 })
