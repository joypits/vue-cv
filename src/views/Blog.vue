<script setup>
    const title = 'My Personal Portfolio';
    const description = 'Read my latest articles and updates on web application development, technology, and lifestyle.';
    
    const myBlogs = [
        {
            title: 'Best Way to Design',
            date: 'August 15, 2018',
            category: 'Web Design',
            image: 'img/blog/img-1.jpg',
            link: 'blog-dark.html'
        },
        {
            title: 'Things I Need to Get Started',
            date: 'August 10, 2018',
            category: 'Personal',
            image: 'img/blog/img-2.jpg',
            link: 'blog-dark.html'
        },
        {
            title: 'My Current Workspace',
            date: 'August 4, 2018',
            category: 'Design',
            image: 'img/blog/img-3.jpg',
            link: 'blog-dark.html'
        }
    ]

</script>
<template>
    <section class="blog-section pt-page">
        <div class="section-container">
            <!--Page Heading-->
            <div class="page-heading">
                <span class="icon"><i class="lnr lnr-book"></i></span>
                <h2>{{ title }}</h2>
                <p>{{ description }}</p>
            </div>
            <div class="row blogs-masonry">
                <div class="col-lg-4 col-sm-6" v-for="blog in myBlogs" :key="blog.title">
                    <a class='blog-item' :href="blog.link">
                        <div class="blog-image">
                            <img :src="blog.image" :alt="blog.title">
                        </div>
                        <div class="blog-content">
                            <span class="cat">{{ blog.category }}</span>
                            <h4 class="blog-title">{{ blog.title }}</h4>
                            <div class="blog-date">{{ blog.date }}</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
