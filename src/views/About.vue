<script setup>
// ===== IMAGES =====
const signatureImg = '/img/signature-white.png'
// ===== PERSONAL INFO =====
const personalInfo = [
  { title: 'Name', value: 'Joy Faith Prieto' },
  { title: 'Address', value: 'Metro Manila, Philippines' },
  { title: 'Email', value: 'joypitprieto@gmail.com' },
  { title: 'Freelance', value: 'Available' },
]

// ===== SERVICES =====
const services = [
  {
    icon: 'lnr lnr-laptop',
    title: 'Web Development',
    desc: 'PHP Laravel, Vue.js, Node.js, RESTful APIs, MySQL, PostgreSQL',
  },
  {
    icon: 'lnr lnr-laptop',
    title: 'Application Deployment',
    desc: 'Vercel, Terraform, Git, Bitbucket, GitHub',
  },
  {
    icon: 'lnr lnr-laptop',
    title: 'Virtualization & Cloud',
    desc: 'VMware Workstation, Amazon Web Services (AWS), Microsoft Azure, Microsoft Active Directory, Identity and Access Management (IAM), Ticketing Systems (Jira, Zendesk, ServiceNow), SIEM (Splunk), Networking Fundamentals, Security Operations Center (SOC) Fundamentals',
  },
  {
    icon: 'lnr lnr-eye',
    title: 'Security Operation Center (SOC) Analyst',
    desc: 'CompTIA Security+ Lab Experience: SecureCRT, hMailServer, Thunderbird, Kali Linux, File Integrity & Hash Analysis, Malware Analysis & Defense Labs',
  },
  {
    icon: 'lnr lnr-laptop-phone',
    title: 'Technical Support & Troubleshooting',
    desc: 'Troubleshooting hardware and software issues, providing user support, and resolving technical problems.',
  },
  {
    icon: 'lnr lnr-camera',
    title: 'Photography',
    desc: 'Portrait, Event, Sports, Photo Editing, Video Editing',
  },
]

// ===== CLIENTS =====
// const clients = [
//   'client-01.png',
//   'client-02.png',
//   'client-03.png',
//   'client-04.png',
//   'client-05.png',
//   'client-06.png',
//   'client-07.png',
//   'client-08.png',
//   'client-09.png',
// ]

// ===== TESTIMONIALS =====
// const testimonials = [
//   {
//     img: 'author-1.jpg',
//     name: 'Kate Fox',
//     role: 'Digital Marketing Executive',
//     text: 'Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit.',
//   },
//   {
//     img: 'author-2.jpg',
//     name: 'Emma Jones',
//     role: 'Creative Director',
//     text: 'Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit.',
//   },
//   {
//     img: 'author-3.jpg',
//     name: 'Jack Smith',
//     role: 'Marketing Director',
//     text: 'Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit.',
//   },
// ]
</script>

<template>
  <section class="about-section pt-page">
    <div class="section-container">
      <!-- Page Heading -->
      <div class="page-heading">
        <span class="icon"><i class="lnr lnr-user"></i></span>
        <h2>About Me</h2>
      </div>

      <!-- About Info -->
      <div class="row about mb-70">
        <div class="col-lg-8">
          <h3 class="mb-20">Software Developer & SOC Analyst</h3>
          <p>
            I am a Software Developer and SOC Analyst with experience in building, deploying, and securing scalable web applications. As a Full-Stack Developer, I specialize in developing robust systems using modern frameworks while ensuring performance, reliability, and security best practices. <br />
            I have hands-on experience in system deployment, optimization, and maintenance, with a strong understanding of cloud infrastructure and cybersecurity operations. My security background includes working with SIEM tools, virtualization technologies, Active Directory, IAM, and ticketing systems, enabling me to bridge development and security effectively. <br />
            From a development perspective, I work with PHP Laravel, Vue.js, Node.js, RESTful APIs, MySQL, and PostgreSQL to deliver efficient and maintainable solutions. For application deployment and infrastructure, I use Vercel and Terraform, and I am proficient in version control using Git, Bitbucket, and GitHub.
          </p>
        </div>

        <!-- Personal Info -->
        <div class="col-lg-4">
          <div class="about-info">
            <h3 class="mb-20">Personal Information</h3>
            <ul>
              <li v-for="(item, i) in personalInfo" :key="i">
                <span class="title">{{ item.title }}</span>
                <span class="value">{{ item.value }}</span>
              </li>
            </ul>

            <div class="resume-button mt-30">
              <a class="btn-main" href="#">Download Resume</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Services -->
      <div class="row services mb-30">
        <div class="col-md-12">
          <div class="subheading">
            <h3>Services</h3>
          </div>
        </div>

        <div
          v-for="(service, i) in services"
          :key="i"
          class="col-lg-3 col-sm-6"
        >
          <div class="service-item">
            <div class="icon">
              <i :class="service.icon"></i>
            </div>
            <h4>{{ service.title }}</h4>
            <p>{{ service.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Clients -->
      <!-- <div class="row mb-70">
  <div class="col-md-12">
    <div class="subheading">
      <h3>Clients</h3>
    </div>
  </div>

  <div
    v-for="(client, i) in clients"
    :key="i"
    class="client-logo col-md-2"
  >
    <img
      :src="`/img/clients/${client}`"
      alt="Client"
      style="max-width:100%; height:auto"
    />
  </div>
</div> -->

      <!-- Testimonials -->
      <!-- <div class="row testimonials mb-50">
        <div class="col-md-12">
          <div class="subheading">
            <h3>Testimonials</h3>
          </div>

          <div
            v-for="(t, i) in testimonials"
            :key="i"
            class="testimonial-item"
          >
            <div class="testimonial-content">
              <p>{{ t.text }}</p>
            </div>

            <div class="testimonial-meta">
              <img :src="`/img/testimonials/${t.img}`" alt="Author" />
              <div class="meta-info">
                <h4>{{ t.name }}</h4>
                <p>{{ t.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div> -->

    </div>
  </section>
</template>
