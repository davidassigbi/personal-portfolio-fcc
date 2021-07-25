const createSocialLink = (href, text, iconClassName, linkId="") => ({href, text, iconClassName, linkId})

const socialLinks = [
    createSocialLink("https://github.com/davidassigbi", "Github", "fab fa-github", "profile-link"), // user story 8
    createSocialLink("https://www.freecodecamp.org/davidassigbi", "FreeCodeCamp", "fab fa-free-code-camp"),
    createSocialLink("https://www.linkedin.com/in/david-assigbi-457646174", "LinkedIn", "fab fa-linkedin-in"),
    createSocialLink("https://twitter.com/david_assigbi", "Twitter", "fab fa-twitter"),
//    createSocialLink("#", "Facebook", "fab fa-facebook"),
//    createSocialLink("mail:iwork@gmail.com", "Send me a mail", "fas fa-at"),
//    createSocialLink("tel:0022899999999", "Call me", "fal fa-mobile"),
]

const divSocialLinks = document.getElementById("social-links")
socialLinks.forEach(link => {
    divSocialLinks.innerHTML += 
    `<a target="_blank" href="${link.href}" ${link.linkId ? `id="${link.linkId}"` : ""}>
        <i class="${link.iconClassName}"></i>
        ${link.text}
    </a>`
})

const createProject = (href, imageSource, text, imageAlt = "Project image") => ({href, imageSource, imageAlt, text})

const projects = [
    createProject("https://davidassigbi.github.io/freecodecamp-tribute-page", "images/fcc_nelson_mandela.jpg", "Nelson mandela tribute"),
    createProject("https://davidassigbi.github.io/survey-form-fcc", "images/fcc_survey_form.jpg", "A survey form"),
    createProject("https://davidassigbi.github.io/technical-documenation-fcc", "images/fcc_technical_doc.jpg", "Technical documentation"),
    createProject("https://davidassigbi.github.io/product-landing-fcc", "images/fcc_copilot.jpg", "Github copilot short"),
]

const projectCardContainer = document.getElementById("project-cards")
projects.forEach(p => {
    projectCardContainer.innerHTML += 
`<a class="project-tile" target="_blank" href="${p.href}">
    <!-- user story 4, 5 -->
    <img src="${p.imageSource}" alt="${p.imageAlt}" />
    <span>&nbsp;${p.text}&nbsp;</span>
</a>`
})
