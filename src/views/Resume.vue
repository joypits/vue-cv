<script setup>
const experience = [
  {
    title: 'Information Technology Officer I',
    company: 'Office of the President, Malacañang, Manila, PHILIPPINES',
    description:
      'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque.',
    from: '2017',
    to: 'Present'
  }
]

const education = [
  {
    title: 'Master in Information Technology',
    school: 'Philippine Christian University, Taft Avenue, Manila, PHILIPPINES',
    description:
    [
      'Capstone project: Facial Logs Recognition System'
    ],
    from: '2022',
    to: '2024'
  },
  {
    title: 'BS in Information Technology',
    school: 'University of the Immaculate Conception, Davao City, PHILIPPINES',
    description:
      [
        'Capstone project 1: Inventory Management System',
        'Capstone project 2: Web Based Application for Student Selection on Higher Education Degree'
      ],
    from: '2010',
    to: '2014'
  }
]

const skills = [
  {
    title: 'Cybersecurity Skills',
    items: [
      { name: 'Coral Draw', value: 91 },
      { name: 'Photoshop', value: 82 },
      { name: 'Illustrator', value: 94 }
    ]
  },
  {
    title: 'Coding Skills',
    items: [
      { name: 'PHP Laravel', value: 87 },
      { name: 'Vue.js', value: 85 },
      { name: 'Node.js', value: 85 },
      { name: 'Javascript', value: 80 },
    ]
  },
  {
    title: 'Photography Skills',
    items: [
      { name: 'Photoshop', value: 70 },
      { name: 'Lightroom', value: 75 },
    ]
  }
]
</script>

<template>
  <section id="resume" class="resume-section pt-page">
    <div class="section-container">
      <div class="page-heading">
        <span class="icon"><i class="lnr lnr-license"></i></span>
        <h2>My Resume</h2>
      </div>

      <!-- Experience & Education -->
      <div class="row mb-20">
        <!-- Experience -->
        <div class="col-lg-6">
          <div class="subheading">
            <h3>Experience</h3>
          </div>

          <ul class="experience">
            <li v-for="(item, index) in experience" :key="index">
              <span class="line-left"></span>
              <div class="content">
                <h4>{{ item.title }}</h4>
                <h5>{{ item.company }}</h5>
                <p class="info">{{ item.description }}</p>
               
              </div>
              <span class="year">
                <span class="to">{{ item.to }}</span>
                <span class="from">{{ item.from }}</span>
              </span>
            </li>
          </ul>
        </div>

        <!-- Education -->
        <div class="col-lg-6">
          <div class="subheading">
            <h3>Education</h3>
          </div>

          <ul class="education">
            <li v-for="(item, index) in education" :key="index">
              <span class="line-left"></span>
              <div class="content">
                <h4>{{ item.title }}</h4>
                <h5>{{ item.school }}</h5>
                <p class="info">
                  <span v-for="(line, i) in item.description" :key="i">
                    {{ line }}<br />
                  </span>
                </p>
              </div>
              <span class="year">
                <span class="to">{{ item.to }}</span>
                <span class="from">{{ item.from }}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Skills -->
      <div class="row">
        <div
          class="col-lg-6 skills"
          v-for="(group, index) in skills"
          :key="index"
        >
          <div class="subheading">
            <h3>{{ group.title }}</h3>
          </div>

          <div
            class="skill-item"
            v-for="(skill, i) in group.items"
            :key="i"
          >
            <h4 class="progress-title">{{ skill.name }}</h4>
            <div class="progress">
              <div
                class="progress-bar"
                :style="{ width: skill.value + '%' }"
              >
                <div class="progress-value">
                  {{ skill.value }}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

