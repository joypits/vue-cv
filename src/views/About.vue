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
    desc: 'PHP Laravel, Vue.js, JavaScript, Node.js, RESTful APIs, MySQL',
  },
  {
    icon: 'lnr lnr-laptop',
    title: 'Application Deployment',
    desc: 'Vercel, Railway, Git, Bitbucket, GitHub',
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
          <h3 class="mb-20">Full-Stack Developer with Experience in DevOps and Cybersecurity</h3>
          <p>
           I am a Full-Stack Developer with proven experience in designing, developing, deploying, and securing scalable web applications. I specialize in building robust systems following the Software Development Life Cycle (SDLC), leveraging modern frameworks and technologies while adhering to performance, reliability, and security best practices.
          I have hands-on experience in system deployment, optimization, and maintenance, supported by a strong foundation in cloud infrastructure and cybersecurity operations. My security expertise includes working with SIEM tools, virtualization technologies, Active Directory, Identity and Access Management (IAM), and ticketing systems—allowing me to effectively bridge the gap between development and security.
          From a development standpoint, I work extensively with PHP Laravel, Vue.js, Node.js, RESTful APIs, and MySQL to deliver efficient, scalable, and maintainable solutions. For infrastructure and deployment, I utilize Vercel and Railway, and I am proficient in version control and collaboration tools including Git, Bitbucket, and GitHub.
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
    </div>
  </section>
</template>
