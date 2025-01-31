import checkConfig from "../../../lib/checkConfig";

export default function handle(req, res) {
  if (!checkConfig())
    return res.status(500).json({
      error: 500,
      description: "JSBoard is currently not configured",
      configured: false,
    });
  return res.status(200).json({
    configured: true,
    forums: [
      {
        icon: "Heroicons.SpeakerPhoneIcon",
        name: "Announcements",
        description: "see dem newz",
        redirect: "#",
        color: "blue", //won't work, purgecss needs to see full names
        topics: 10,
        posts: 10,
      },
      {
        icon: "Heroicons.SpeakerPhoneIcon",
        name: "Simp for bl0x",
        description: "Just do it lel",
        redirect: "#",
        color: "bg-green-100",
        topics: 10,
        posts: 10,
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In expedita molestias possimus culpa maxime quae numquam architecto assumenda itaque nam, enim qui repellendus facilis. Maiores, tempora? Eos dolorem impedit quo autem cupiditate ea nam? Molestiae, nisi. Facere eius mollitia, odit veniam quam cumque illum, aperiam vero error sequi praesentium accusamus blanditiis voluptates nostrum autem voluptatem esse cum nisi consectetur reprehenderit iure. Tempora perspiciatis reprehenderit qui. Minus tenetur laudantium, in nesciunt rem ipsa, aut quis facere facilis non quasi ullam, pariatur quo! Numquam sit esse explicabo voluptate sequi, corporis necessitatibus est optio dolorum molestiae, recusandae eos blanditiis doloribus placeat earum voluptatem. Iure exercitationem cupiditate voluptatum quas in officiis, accusamus repellat praesentium ab rem, eum eaque debitis quidem natus consequatur possimus dicta? Voluptates modi ipsam maiores dignissimos praesentium animi id, officiis delectus provident hic fuga aliquid dolorum possimus assumenda error porro minus consectetur quisquam exercitationem magni incidunt quas vitae? Sed, quos culpa.",
    // svgs and json are kinda 🤡, so I had to do what I did below to make this work
    store: true, //true = enabled, false = not enabled
    storeLink: "https://example.com", //uses camelCase cause why not
    website: true,
    websiteLink: "#",
    custom: true,
    customName: "Among", //custom link also gets a name
    customLink: "https://example.com",
  });
}
