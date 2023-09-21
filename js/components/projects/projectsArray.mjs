export const projects = [
  {
    title: "Social media app",
    description:
      "To access and test the social media app website, please follow the instructions provided in the readme file of the project. As part of the testing process, you will need to sign in using a (fake) @noroff.stud.no email address. The readme file will contain detailed instructions on how to proceed with the testing, including any additional steps or requirements. If you encounter any issues or have any questions during the testing process, please refer to the readme file or reach out for further assistance. (UI updated, new images coming soon)",
    images: [
      `../../../assets/images/cards/theSocial/social-homepage.jpg`,
      `../../../assets/images/cards/theSocial/social-login.jpg`,
      `../../../assets/images/cards/theSocial/social-register.jpg`,
      `../../../assets/images/cards/theSocial/social-profile.jpg`,
      `../../../assets/images/cards/theSocial/social-details.jpg`,
    ],
    tools: ["../../../assets/icons/JavaScript-png.png", "../../../assets/icons/Sass-png.png", "../../../assets/icons/HTML-png.png", "../../../assets/icons/CSS-png.png"],
    links: {
      hostedDemo: "https://the-social-media.netlify.app/",
      repository: "https://github.com/Sigvel/TheSocial",
    },
  },
  {
    title: "Merrno E-Commerce",
    description:
      "The e-commerce website utilizes an API that provides product data. Currently, the API only includes information about available products. The cart system, implemented using Zustand, is designed to function properly. If you encounter any bugs or issues while using the website, I kindly request that you submit an issue via GitHub, as the contact form is not currently connected.",
    images: [
      `../../../assets/images/cards/merrno/merrno-homepage.jpg`,
      `../../../assets/images/cards/merrno/merrno-product.jpg`,
      `../../../assets/images/cards/merrno/merrno-cart.jpg`,
      `../../../assets/images/cards/merrno/merrno-contact.jpg`,
    ],
    tools: [
      "../../../assets/icons/JavaScript-png.png",
      "../../../assets/icons/Sass-png.png",
      "../../../assets/icons/React-Dark-png.png",
      "../../../assets/icons/StyledComponents-png.png",
      "../../../assets/icons/zustand-png.png",
    ],
    links: {
      hostedDemo: "https://sensational-naiad-7cfd07.netlify.app/",
      repository: "https://github.com/Sigvel/Merrno",
    },
  },
  {
    title: "Holidaze",
    description:
      "The vacation website provides a platform for users to both rent out their venues and book venues for their vacations. Please note that, due to API restrictions, users are required to sign up using a @stud.noroff.no email address. Detailed instructions on how to sign up and utilize the website can be found in the project's readme file.",
    images: [
      `../../../assets/images/cards/holidaze/holidaze-homepage.jpg`,
      `../../../assets/images/cards/holidaze/holidaze-login.jpg`,
      `../../../assets/images/cards/holidaze/holidaze-profile.jpg`,
      `../../../assets/images/cards/holidaze/holidaze-user-profile.jpg`,
      `../../../assets/images/cards/holidaze/holidaze-venue.jpg`,
    ],
    tools: [
      "../../../assets/icons/JavaScript-png.png",
      "../../../assets/icons/TailwindCSS-Dark-png.png",
      "../../../assets/icons/Redux-png.png",
      "../../../assets/icons/React-Dark-png.png",
    ],
    links: {
      hostedDemo: "https://holidaze-site.netlify.app/",
      repository: "https://github.com/Sigvel/project-exam-2",
    },
  },
  {
    title: "Chatbot",
    description:
      "The chatbot you are interacting with is created using the OpenAI API, specifically utilizing the GPT-3.5-turbo model. To use the chatbot, simply insert your API key and prompt to initiate a conversation. This project is open-source, and you are welcome to clone it and build upon it for your own purposes. Additionally, contributions are encouraged, and you can contribute by submitting a pull request to enhance the chatbot's capabilities.",
    images: [`../../../assets/images/cards/chatbot/chatbot-homepage.jpg`],
    tools: ["../../../assets/icons/JavaScript-png.png", "../../../assets/icons/CSS-png.png", "../../../assets/icons/HTML-png.png"],
    links: {
      hostedDemo: "https://portfolio-panda-dev.netlify.app/",
      repository: "https://github.com/Sigvel/chatbot",
    },
  },
];
