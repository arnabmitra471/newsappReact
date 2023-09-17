import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class News extends Component {
  articles = [
    {
      "source": {
        "id": null,
        "name": "Nbcsportsboston.com"
      },
      "author": "Justin Leger",
      "title": "Report: Bloom, Red Sox turned down enticing Sale trade offer in 2022 - NBC Sports Boston",
      "description": "A new report suggests it was the moves Chaim Bloom didn’t make — including a potential Chris Sale deal in 2022 — that led to his demise.",
      "url": "https://www.nbcsportsboston.com/mlb/boston-red-sox/chaim-bloom-red-sox-turned-down-enticing-chris-sale-trade-offer-2022/553100/",
      "urlToImage": "https://media.nbcsportsboston.com/2023/05/Chris-Sale-USATSI_16960122_0-1.jpg?quality=85&strip=all&resize=1200%2C675",
      "publishedAt": "2023-09-15T04:06:00Z",
      "content": "Chaim Bloom's demise may have been the result of the moves he didn't make during his tenure as Boston Red Sox chief baseball officer.\r\nOne glaring example, according to WEEI's Rob Bradford, occurred … [+2299 chars]"
    },
    {
      "source": {
        "id": "axios",
        "name": "Axios"
      },
      "author": "Axios",
      "title": "Biden's impeachment attempt could backfire on Republicans, per swing voter focus groups - Axios",
      "description": null,
      "url": "https://www.axios.com/2023/09/14/biden-impeachment-republicans-mccarthy",
      "urlToImage": null,
      "publishedAt": "2023-09-15T03:36:23Z",
      "content": null
    },
    {
      "source": {
        "id": "politico",
        "name": "Politico"
      },
      "author": null,
      "title": "Prosecutors: No grounds for judge to recuse in federal case against Trump over 2020 election - POLITICO",
      "description": "The former president’s lawyers contend Judge Tanya Chutkan should step aside due to prior comments.",
      "url": "https://www.politico.com/news/2023/09/14/judge-tanya-chutkan-recuse-trump-case-00116146",
      "urlToImage": "https://static.politico.com/7c/8c/5483698b49c69f843842572a1470/election-2024-iowa-98799.jpg",
      "publishedAt": "2023-09-15T03:27:50Z",
      "content": "Trump had asked for Chutkan, an appointee of President Barack Obama, to withdraw from the case over comments she made in two sentencing hearings for defendants who pleaded guilty to crimes related to… [+3890 chars]"
    },
    {
      "source": {
        "id": "fox-sports",
        "name": "Fox Sports"
      },
      "author": null,
      "title": "Vikings vs. Eagles highlights: Eagles win 34-28 on Thursday Night Football - FOX Sports",
      "description": "Jalen Hurts and the Eagles defeated the Vikings to kick off Week 2 of the NFL season. Here are the highlights!",
      "url": "https://www.foxsports.com/stories/nfl/vikings-vs-eagles-live-updates-top-moments-from-thursday-night-football",
      "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/09/1408/814/09.14.23_NFL-Top-Plays_16x9.jpg?ve=1&tl=1",
      "publishedAt": "2023-09-15T03:24:04Z",
      "content": "Jalen Hurts and the Philadelphia Eagles (2-0) kicked off Week 2 of the 2023 NFL season, taking down the Minnesota Vikings (0-2) at Lincoln Financial Field. Running back D'Andre Swift led the way for … [+4501 chars]"
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Al Jazeera",
      "title": "Ukraine says Russian missile defence destroyed in Crimea, 2 warships hits - Al Jazeera English",
      "description": "Russian S-400 ‘Triumf’ surface-to-air missile defence system was reportedly destroyed in ‘special operation’ in Crimea.",
      "url": "https://www.aljazeera.com/news/2023/9/15/ukraine-says-russian-missile-defence-destroyed-in-crimea-2-warships-hits",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/09/2020-08-11T151254Z_1536611547_RC2RBI98JWQJ_RTRMADP_3_RUSSIA-DEFENCE-1694745345.jpg?resize=1920%2C1440",
      "publishedAt": "2023-09-15T03:06:34Z",
      "content": "Ukraine said its forces attacked two Russian patrol ships operating in the Black Sea and destroyed a sophisticated Triumf surface-to-air missile defence system in Russian-occupied Crimea, with milita… [+4574 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "[Removed]"
      },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": null,
      "title": "Jets QB Aaron Rodgers says surgery for torn Achilles 'went great' - ESPN - ESPN",
      "description": "New York Jets quarterback Aaron Rodgers said Thursday that surgery to repair a torn Achilles tendon in his left leg \"went great.\"",
      "url": "https://www.espn.com/nfl/story/_/id/38402084/jets-qb-aaron-rodgers-says-surgery-torn-achilles-went-great",
      "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0913%2Fr1224138_1296x729_16%2D9.jpg",
      "publishedAt": "2023-09-15T01:32:00Z",
      "content": "Sep 14, 2023, 09:32 PM ET\r\nNew York Jets quarterback Aaron Rodgers said Thursday that surgery to repair a torn Achilles tendon in his left leg \"went great.\"\r\nThe 39-year-old Rodgers suffered the seas… [+1949 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Marshall Cohen, Kara Scannell, Hannah Rabinowitz",
      "title": "Hunter Biden indicted on gun charges - CNN",
      "description": "President Joe Biden’s son, Hunter Biden, has been indicted by special counsel David Weiss in connection with a gun he purchased in 2018, the first time in US history the Justice Department has charged the child of a sitting president.",
      "url": "https://www.cnn.com/2023/09/14/politics/hunter-biden/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230830120900-01-house-oversight-hunter-biden.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-09-15T01:24:00Z",
      "content": "President Joe Bidens son, Hunter Biden, has been indicted by special counsel David Weiss in connection with a gun he purchased in 2018, the first time in US history the Justice Department has charged… [+6825 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Widlore Mérancourt, Samantha Schmidt, Amanda Coletta",
      "title": "Dominican Republic closes border with Haiti, further stoking tensions - The Washington Post",
      "description": "The neighbors share the Caribbean island of Hispaniola and a long history of strained relations.",
      "url": "https://www.washingtonpost.com/world/2023/09/14/dominican-republic-closes-border-with-haiti-further-stoking-tensions/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EWDOJAHCNFVPCXS7F7HJYZPPQU.JPG&w=1440",
      "publishedAt": "2023-09-15T01:17:00Z",
      "content": "Comment on this story\r\nComment\r\nPORT-AU-PRINCE, Haiti The Dominican Republic had already begun building a wall at its border with Haiti. Then it cracked down on immigration, deporting tens of thousan… [+7919 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Kate Sullivan",
      "title": "Trump says he discussed pardoning himself but dismissed option - CNN",
      "description": "Former President Donald Trump said Thursday that he discussed pardoning himself in the final days of his presidency but decided against it.",
      "url": "https://www.cnn.com/2023/09/14/politics/donald-trump-pardon/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230914191914-trump-09082023.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-09-15T01:15:00Z",
      "content": "Former President Donald Trump said Thursday that he discussed pardoning himself in the final days of his presidency but dismissed the option to do so.\r\nI couldve pardoned myself. Do you know what? I … [+2652 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Melissa Rudy",
      "title": "‘Fourth wave’ of fentanyl overdose deaths has gripped the nation, experts say: ‘The norm, not the exception’ - Fox News",
      "description": "Experts say the U.S. is currently in a “fourth wave\" of opioid overdose deaths, this one marked by a sharp increase in fentanyl — which is a synthetic opioid — being mixed with stimulant drugs.",
      "url": "https://www.foxnews.com/health/fourth-wave-fentanyl-overdose-deaths-gripped-nation-experts-say-norm-not-exception",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/09/cocaine-fentanyl-drugs.jpg",
      "publishedAt": "2023-09-15T01:12:00Z",
      "content": "Experts say the U.S. is currently in a \"fourth wave\" of opioid overdose deaths\r\n, this one marked by a sharp increase in fentanyl a synthetic opioid being mixed with stimulant drugs.\r\nA study publish… [+6396 chars]"
    },
    {
      "source": {
        "id": "politico",
        "name": "Politico"
      },
      "author": null,
      "title": "NASA names its new UFO boss — after initially saying it wouldn't - POLITICO",
      "description": "The agency initially declined to release the name, citing threats.",
      "url": "https://www.politico.com/news/2023/09/14/nasa-ufo-boss-secret-00116075",
      "urlToImage": "https://static.politico.com/4a/98/777aa58441dfa2758a090a535cd5/https-delivery-gettyimages.com/downloads/1680565559",
      "publishedAt": "2023-09-14T23:18:12Z",
      "content": "During a briefing with reporters earlier Thursday, NASA officials initially declined to disclose the directors identity, citing potential threats.\r\nThey have been working there a while now, during th… [+1597 chars]"
    },
    {
      "source": {
        "id": "financial-times",
        "name": "Financial Times"
      },
      "author": "Demetri Sevastopulo",
      "title": "Chinese defence minister under investigation by Beijing, US believes - Financial Times",
      "description": "Li Shangfu has not been seen in public for more than two weeks",
      "url": "https://www.ft.com/content/d0fa10c5-303c-4129-8283-a147639f70b3",
      "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252F8278d93b-7ec8-44f5-83d6-ef25b1f3ba78.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900",
      "publishedAt": "2023-09-14T22:38:56Z",
      "content": "The US government believes Chinese defence minister Li Shangfu has been placed under investigation in the latest sign of turmoil among elite members of Beijings military and foreign policy establishm… [+3007 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Juli Clover",
      "title": "Here's When You Can Pre-Order the iPhone 15, iPhone 15 Plus, iPhone 15 Pro and iPhone 15 Pro Max in Every Time Zone - MacRumors",
      "description": "Pre-orders for the iPhone 15, iPhone 15 Plus, iPhone 15 Pro, and iPhone 15 Pro Max are set to begin on Friday, September 15 at 5:00 a.m. Pacific...",
      "url": "https://www.macrumors.com/2023/09/14/iphone-15-preorder-times/",
      "urlToImage": "https://images.macrumors.com/t/OdEzPsmLFQzUMfXrSPbMsSSeie4=/1600x/article-new/2023/09/iphone-15-blue.jpg",
      "publishedAt": "2023-09-14T22:35:51Z",
      "content": "Pre-orders for the iPhone 15, ‌iPhone 15‌ Plus, iPhone 15 Pro, and ‌iPhone 15 Pro‌ Max are set to begin on Friday, September 15 at 5:00 a.m. Pacific Time, with the new devices set to become available… [+2641 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Zeba Siddiqui",
      "title": "Hackers say they stole 6 terabytes of data from casino giants MGM, Caesars - Reuters",
      "description": "The Scattered Spider hacking group said on Thursday it took six terabytes of data from the systems of multi-billion-dollar casino operators MGM Resorts International <a href=\"https://www.reuters.com/markets/companies/MGM.N\" target=\"_blank\">(MGM.N)</a> and Cae…",
      "url": "https://www.reuters.com/business/casino-giant-caesars-confirms-data-breach-2023-09-14/",
      "urlToImage": "https://www.reuters.com/resizer/9P8T3MbZliAWiGxR2QxjaUK0Ekg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FATV7CKGNNKUHI3HN5QBEX2YSM.jpg",
      "publishedAt": "2023-09-14T22:16:00Z",
      "content": "Sept 14 (Reuters) - The Scattered Spider hacking group said on Thursday it took six terabytes of data from the systems of multi-billion-dollar casino operators MGM Resorts International (MGM.N) and C… [+2949 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Charles Pulliam-Moore",
      "title": "Netflix's live-action One Piece to set sail with even more episodes - The Verge",
      "description": "According to One Piece creator Eiichiro Oda, Netflix has ordered more episodes of its new live-action adaptation of the hit manga.",
      "url": "https://www.theverge.com/2023/9/14/23874258/netflix-one-piece-season-2-announcement",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/vTdUynvbGrMaDZE-gZOWmAOPSzI=/0x0:3600x2400/1200x628/filters:focal(1800x1200:1801x1201)/cdn.vox-cdn.com/uploads/chorus_asset/file/24922640/ONEPIECE_Unit_06892RC.jpeg",
      "publishedAt": "2023-09-14T21:43:22Z",
      "content": "Netflixs live-action One Piece to set sail with even more episodes\r\nNetflixs live-action One Piece to set sail with even more episodes\r\n / One Piece creator Eiichiro Oda says even more episodes of Ne… [+1647 chars]"
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "Caitlin O'Kane",
      "title": "Police group photo with captured inmate Danelo Cavalcante generates criticism online - CBS News",
      "description": "Pennsylvania State Police Lt. Col. George Bivens said the officers were \"proud of their work.\"",
      "url": "https://www.cbsnews.com/news/danelo-cavalcante-police-group-photo-with-police-capture/",
      "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/09/13/17c2d69f-333a-41e4-a2d9-5e3e6852c522/thumbnail/1200x630/f8335e7b9bf0977a7f173716f46a26f9/snapshot.jpg?v=6616762727d81e1cb010134e0c556e29",
      "publishedAt": "2023-09-14T21:42:18Z",
      "content": "Shortly after escaped inmate Danelo Cavalcante was captured in Pennsylvania on Wednesday following an intense 14-day manhunt, law enforcement officials posed for a group photo with the convicted kill… [+3358 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Post"
      },
      "author": "Emily Crane",
      "title": "Stunning $560M Perelman Performing Arts Center opens near NYC's ground zero - New York Post ",
      "description": "The 138-foot-tall complex is encased in nearly 5,000 marble panel tiles backlit by chandeliers, allowing for light to radiate in throughout the day and glow at night.",
      "url": "https://nypost.com/2023/09/14/perelman-performing-arts-center-opens-near-nycs-ground-zero/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/09/NYPICHPDPICT000039574370-1.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2023-09-14T21:07:00Z",
      "content": "A breathtaking, giant marble cube now shines brightly near ground zero in Lower Manhattan as the curtain finally rose on the Big Apple’s newest theater complex this week.\r\nThe exquisite $560 million … [+2925 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "GOP lawmakers commiserate with McCarthy after frustrations boil over - NBC News",
      "description": null,
      "url": "https://www.youtube.com/watch?v=9ZBEqnzZQqw",
      "urlToImage": null,
      "publishedAt": "2023-09-14T21:05:03Z",
      "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    },
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "",
      "title": "Colorado's Deion Sanders fires back at Colorado State coach: 'They messed around and made it [personal]' - CBS Sports",
      "description": "Colorado is ready to use Jay Norvell's comments as fuel for its Week 3 rivalry game vs. Colorado State",
      "url": "https://www.cbssports.com/college-football/news/colorados-deion-sanders-fires-back-at-colorado-state-coach-they-messed-around-and-made-it-personal/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/09/14/64e69eb8-0647-4510-8a80-d01c598a0f3a/thumbnail/1200x675/33a21ba8a3723ba5c969708d245de06a/usatsi-21380309-168396417-lowres-1.jpg",
      "publishedAt": "2023-09-14T21:01:00Z",
      "content": "It didn't take long for Colorado State coach Jay Norvell's shot at Deion Sanders to reach the Colorado football program. In a video posted to YouTube by his son, Deion Sanders Jr., \"Coach Prime\" took… [+1670 chars]"
    }
  ]
  constructor(){
    super();
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading:false,
      page:1
    }
  }
  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=112ab18126964b80b648149d0f4def2b";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
  }
  render() {
    console.log("render");
    return (
      <div className="container">
        <h2>NewsMonkey -top headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
          
              <NewsItem title={element != null ? element.title.slice(0,45):""} description={element.description != null ? element.description.slice(0,88):element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
              
            </div>
            })};
          </div>
          <div className="container">
          <button type="button" class="btn btn-danger">Previous</button>
          <button type="button" class="btn btn-danger">Next</button>
          </div>
    </div>
    )
  }
}
