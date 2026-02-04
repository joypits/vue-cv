<script setup>
  const portfolioItems = [
    {
      category: 'WebApp',
      image: 'img/portfolio/img-1.jpg',
      title: 'Book Design',
      description: 'WebApp'
    },
    {
      category: 'Cybersecurity',
      image: 'img/portfolio/img-2.jpg',
      title: 'Notepad Design',
      description: 'Cybersecurity'
    },
    {
      category: 'Photography',
      image: 'img/portfolio/img-3.jpg',
      title: 'Creative Cup',
      description: 'Photography'
    },
    {
      category: 'Cybersecurity',
      image: 'img/portfolio/img-4.jpg',
      title: 'Business Card',
      description: 'Cybersecurity'
    },
    {
      category: 'WebApp',
      image: 'img/portfolio/img-5.jpg',
      title: 'Back Pack',
      description: 'WebApp'
    }
  ]

  const filters = ['All', 'WebApp', 'Cybersecurity', 'Photography', 'Certifications']
  
</script>
<template>
    <section class="portfolio-section pt-page">
        <div class="section-container">

            <!--Page Heading-->
            <div class="page-heading">
                <span class="icon"><i class="lnr lnr-briefcase"></i></span>
                <h2>Portfolio</h2>
            </div>

            <div class="row">
                <!--Portfolio Filter-->
                <div class="col-md-12 portfolio-filter text-center">
                    <ul>
                        <li class="active" v-for="(filter, i) in filters" :data-filter="filter === 'All' ? '*' : `.${filter.toLowerCase()}`">{{ filter }}</li>
                    </ul>
                </div>
            </div>

            <!--Portfolio Items-->
            <div class="row portfolio-items mb-50">

                <!--Portfolio Item-->
                <div class="item col-lg-4 col-sm-6" v-for="(item, i) in portfolioItems" :key="i" :class="item.category.split(' ').join('').toLowerCase()">
                    <a class="image-link" :href="item.image">
                        <figure>
                            <img :src="item.image" :alt="item.title">
                            <figcaption>
                                <h4>{{ item.title }}</h4>
                            </figcaption>
                        </figure>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
