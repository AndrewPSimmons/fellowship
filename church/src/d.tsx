import FacebookLink from "./comps/socialLinks/FacebookLink"
import InstagramLink from "./comps/socialLinks/InstagramLink"
import YoutubeLink from "./comps/socialLinks/YoutubeLink"


const d = {
  address: "7501 Muncaster Mill Road, Gaithersburg, Maryland 20877",
  addressShort: "7501 Muncaster Mill Road",
  email: {
    connect: "connect@fellowshipmd.church"
  },
  socials: {
    emails: {
      contact: "connect@fellowshipmd.church"
    },
    youtube: {
      url: "https://youtube.com/channel/UC9l9Gk14Uy1OzuLZJT1hb9A",
      name: "Fellowship Church"
    },
    facebook: {
      url: "https://facebook.com/fellowshipchurchmd",
      at: "@fellowshipchurchmd",
      name: "Fellowship Church",
    },
    instagram: {
      url: "https://www.instagram.com/fellowshipchurchmd/",
      at: "@fellowshipchurchmd"
    }
  },
  vision: {
    title: "Vision",
    question: "What does The Fellowship look like",
    verse: "They were continually devoting themselves to the apostles’ teaching and to fellowship, to the breaking of bread and to prayer. Everyone kept feeling a sense of awe; and many wonders and signs were taking place through the apostles. And all those who had believed were together and had all things in common; and they began selling their property and possessions and were sharing them with all, as anyone might have need. Day by day continuing with one mind in the temple, and breaking bread from house to house, they were taking their meals together with gladness and sincerity of heart, praising God and having favor with all the people. And the Lord was adding to their number day by day those who were being saved.",
    verseRef: "Acts 2:42-47 NASB",
    texts: ["We are more and more becoming a culture that emanates Jesus. We are a place where people are transformed through"],
    text1bullets: ["Teaching", "Authentic Relationships", "Prayer", "Radical Generosity"]
  },
  mission: {
    title: "Mission",
    question: "What are we here to do",
    verse: "And He gave some as apostles, and some as prophets, and some as evangelists, and some as pastors and teachers, for the equipping of the saints for the work of service, to the building up of the body of Christ; until we all attain to the unity of the faith, and of the knowledge of the Son of God, to a mature man, to the measure of the stature which belongs to the fullness of Christ.",
    verseRef: "Ephesians 4:11-13 NASB",
    notes: ["Simply put, we’re here to equip the saints for the work of service and the building up of the body of Christ"],
  },
  values: {
    title: "Values",
    question: "What makes us, us",
    texts: ["We are not ‘building a better mousetrap’. Nor do we think we have a silver bullet. God is calling and equipping people everywhere to advance His kingdom and He is faithful to get the job done. We don’t see ourselves as a new or better anything, just distinct to our fellowship. Here is what we feel like are the values that make us, us."],
    valuesArray: [{
      title: "Growth",
      verse: "until we all attain to the unity of the faith, and of the knowledge of the Son of God, to a mature man, to the measure of the stature which belongs to the fullness of Christ.",
      verseRef: "Ephesians 4:13 NASB",
      notes: [
        "What growth means for us is not the number of people but the maturity of people. As Christ followers, our maturity is measured by how much we think, act and love like Jesus"
      ],
      texts: []
    },
    {
      title: "Discipleship",
      verse: "but speaking the truth in love, we are to grow up in all aspects into Him who is the head, even Christ,",
      verseRef: "Ephesians 4:15",
      notes: [
        "We take the command to ‘Make Disciples’ seriously. It is a calling, not only for leaders, but for every single disciple",
        "Everything that we do is done within the framework of life-on-life discipleship. We try our best to conquer the impossible task of making sure everyone is accounted for",
        "Follow Jesus’ model of making a few disciples...who make a few disciples...who make a few disciples",
        "This means that, throughout the week we are pursuing each other in smaller contexts so that we aren’t just a community group that meets on Sunday, but a family that is a part of each other’s life.",
      ],
      texts: []
    },
    {
      title: "Fellowship",
      verse: "From whom the whole body, being fitted and held together by what every joint supplies, according to the proper working of each individual part, causes the growth of the body for the building up of itself in love.",
      verseRef: "Ephesians 4:16 NASB",
      notes: [
        "Fellowship is not a better word for church.",
        "Biblically, fellowship is not something you do but how you do it. Biblical fellowship is not simply a Christian community, but a community of participation, contribution and sacrifice",
        "As a church, we are prepared to participate, contribute and sacrifice our time, energy and resources for the common good of all in the church."
      ],
      texts: [
        "The Bible is clear, the ‘church’ is not a place but a people. What that means for us is that, though we have set meetings and set times, that is not ‘church’. Our structured events exist to help grow and equip our members but the foundation of our membership is the belonging to our specific family. Put simply, showing up for dinner doesn’t make you part of a family, family is something you’re born into."
      ]
    },
    {
      title: "Prayer",
      verse: "",
      verseRef: "",
      notes: [],
      texts: ["As disciples of Jesus, we should be led by His Spirit, not our own plans, ambition or pride. We believe the best way to be in-step with the Spirit is to have a solid foundation of prayer. We believe the mission of God is God's, to be done God's way, in God's timing, for God's purpose. We believe to not pray is to seek to advance the kingdom in our way, in our timing and for our own purpose. So we seek God. First as our father, so that we are a fellowship who knows Him personally. Second, we seek God so that we make decisions according to His direction"]
    }
    ],
    success: "‘Success’ for us as a fellowship, is measured by the degree in which we are walking out these values. Not solely numbers, giving or good meetings."
  },
  homeView: {
    visionStatement: "Preach the Gospel. Make Disciples",
  },
  connectView: {
    connections: [
      {
        title: "Church Center",
        info: {
          type: "link",
          value: "church center link",
          href: "https://fellowshipchurchmd.churchcenter.com"
        },
        bullets: [
          'This is our primary form of communication for our members',
          'Add “Fellowship Church” to your Church Center account to stay in the loop, access our event calendar, give electronically…and share prayer requests!'
        ]
      },
      {
        title: "Address",
        info: {
          type: "text",
          value: "7501 Muncaster Mill Road, Gaithersburg, Maryland 20877"
        },
        bullets: [
          'Our current meeting place is at Covenant Life Church. We meet in the Spurgeon room above the main lobby. After entering the building, take the stairs immediately to your right. Just follow our signs!'
        ]
      },
      {
        title: "Email",
        info: {
          type: "text",
          value: "connect@fellowshipmd.church"
        },
        bullets: []
      },
      // {
      //   title: "Number",
      //   info: {
      //     type: "text",
      //     value: "555-555-5555"
      //   },
      //   bullets: ['coming soon']
      // },
      {
        title: "Facebook",
        info: {
          type: "comp",
          value: <FacebookLink width={50}/>
        },
        bullets: [
          'Our primary social media hub for the general public',
          'This is where we share photos, general announcements, and live streams'
        ]
      },
      {
        title: "YouTube",
        info: {
          type: "comp",
          value: <YoutubeLink width={50}/>
        },
        bullets: [
          'Our video repository for sermons and such',
        ]
      },
      {
        title: "Instagram",
        info: {
          type: "comp",
          value: <InstagramLink width={50}/>
        },
        bullets: [
          'Another hub for photos, announcements, and videos',
        ]
      },
    ]
  }
}

/* 

Church Center: Link

This is our primary form of communication for our members

Add “Fellowship Church” to your Church Center account to stay in the loop, access our event calendar, give electronically…and share prayer requests!


Address: 7501 Muncaster Mill Road, Gaithersburg, Maryland 20877

Our current meeting place is at Covenant Life Church. We meet in the Spurgeon room above the main lobby. After entering the building, take the stairs immediately to your right. Just follow our signs!


Email: connect@fellowshipmd.church


Number: 123-456-7890 (Coming soon!)


Facebook: facebook.com/fellowshipchurchmd

Our primary social media hub for the general public

This is where we share photos, general announcements, and live streams


YouTube: youtube.com/channel/UC9l9Gk14Uy1OzuLZJT1hb9A

Our video repository for sermons and such


Instagram: @fellowshipchurchmd

Another hub for photos, announcements, and videos
*/
export default d