import React, { Component } from 'react';
import PropTypes from 'prop-types'
import NewsItems from './NewsItems';
import Loading from './Loading';


export class News extends Component {

   /* articles = [
       {
    "source": {
    "id": "politico",
    "name": "Politico"
    },
    "author": null,
    "title": "Rap songs, protests and pork chops: Top 5 moments at the Iowa State Fair - POLITICO",
    "description": "Presidential contenders descended on Iowa to meet with voters  — and in one case, a cow.",
    "url": "https://www.politico.com/news/2023/08/13/iowa-state-fair-candidates-00110970",
    "urlToImage": "https://static.politico.com/65/c4/fb4c189d4d6f9c4af28411a39d08/election-2024-iowa-state-fair-73625.jpg",
    "publishedAt": "2023-08-13T16:53:27Z",
    "content": "Vivek Ramaswamy raps Lose Yourself\r\nFollowing his fair-side chat with Iowa Gov. Kim Reynolds on Saturday morning, GOP presidential candidate Vivek Ramaswamy took to a crowd of supporters to unveil hi… [+4191 chars]"
    },
       {
    "source": {
    "id": null,
    "name": "KESQ"
    },
    "author": "Tatum Larsen",
    "title": "Heavy traffic near Joshua Tree due to Perseid Meteor Shower - kuna noticias y kuna radio",
    "description": "Heavy traffic is expected through the end of the weekend near Joshua Tree National Park as people try to get clearer view of the Perseid meteor shower. To read Spencer Blum's full breakdown of what the Perseid Meteor Shower is, click here. Getting a clear vie…",
    "url": "https://kesq.com/news/2023/08/13/heavy-traffic-near-joshua-tree-due-to-perseid-meteor-shower/",
    "urlToImage": "https://kesq.b-cdn.net/2023/08/MGN_1280x960_10812P00-AIPZD.jpg",
    "publishedAt": "2023-08-13T16:51:58Z",
    "content": "Heavy traffic is expected through the end of the weekend near Joshua Tree National Park as people try to get clearer view of the Perseid meteor shower. \r\nTo read Spencer Blum's full breakdown of what… [+596 chars]"
    },
       {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": null,
    "title": "Transcript: Rep. Mike Turner, House Intelligence Committee chair, on \"Face the Nation,\" August 13, 2023 - CBS News",
    "description": "The following is a transcript of an interview with Rep. Mike Turner, Republican House Intelligence Committee chair, that aired on \"Face the Nation\" on August 13, 2023.",
    "url": "https://www.cbsnews.com/news/mike-turner-house-intelligence-committee-chair-transcript-face-the-nation-08-13-2023/",
    "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/08/13/a7bad73b-2811-4eb7-975d-4708e99b969b/thumbnail/1200x630/72822b6b26ec0ea313397e5b172c7825/1691944913143.png?v=08aa43fa812a9e12e93282c47f58b17f",
    "publishedAt": "2023-08-13T16:42:00Z",
    "content": "The following is a transcript of an interview with Rep. Mike Turner, Republican House Intelligence Committee chair, that aired on \"Face the Nation\" on August 13, 2023.\r\nMARGARET BRENNAN: We're joined… [+8299 chars]"
    },
       {
    "source": {
    "id": "bloomberg",
    "name": "Bloomberg"
    },
    "author": "Joe Deaux, Susanne Barton",
    "title": "U.S. Steel Explores Strategic Alternatives After Getting Unsolicited Bids - Bloomberg",
    "description": "United States Steel Corp. began a formal review of strategic alternatives after receiving “multiple unsolicited” proposals, an indication that a years-long transition may finally be paying off.",
    "url": "https://www.bloomberg.com/news/articles/2023-08-13/u-s-steel-explores-strategic-alternatives-after-getting-offers",
    "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/inTyzEq2aOdg/v1/1200x804.jpg",
    "publishedAt": "2023-08-13T16:34:54Z",
    "content": "United States Steel Corp. began a formal review of strategic alternatives after receiving multiple unsolicited proposals, an indication that a years-long transition may finally be paying off.\r\nPropos… [+269 chars]"
    },
       {
    "source": {
    "id": "fortune",
    "name": "Fortune"
    },
    "author": "Lance Lambert",
    "title": "Housing market outlook: Where to expect mortgage rates in 2024, according to 8 leading research firms - Fortune",
    "description": "On Friday, the average 30-year fixed mortgage rate jumped to 7.19%. But where will it go next?",
    "url": "https://fortune.com/2023/08/13/housing-market-mortgage-rate-outlook-prediction-2024/",
    "urlToImage": "https://content.fortune.com/wp-content/uploads/2023/08/GettyImages-171212132-e1691943827247.jpg?resize=1200,600",
    "publishedAt": "2023-08-13T16:25:00Z",
    "content": "On Friday, the average 30-year fixed mortgage rate jumped to 7.19%. Over the past few months, mortgage rates have climbed back up. Financial markets, which have reacted to stronger-than-expected labo… [+3033 chars]"
    },
       {
    "source": {
    "id": null,
    "name": "MarketWatch"
    },
    "author": "William Watts",
    "title": "A stumbling stock market faces a crucial summer test. Here's what will decide the bull's fate. - MarketWatch",
    "description": "U.S. stock market bulls must fight off a case of late-summer blues.",
    "url": "https://www.marketwatch.com/story/a-stumbling-stock-market-faces-a-crucial-summer-test-heres-what-will-decide-the-bulls-fate-f53567de",
    "urlToImage": "https://images.mktw.net/im-834365/social",
    "publishedAt": "2023-08-13T16:01:00Z",
    "content": "Call it the end-of-summer blues.History shows that things can get ugly and volatile for the U.S. stock market in August and September. So a rocky start to the month shouldnt be a big surprise. Indeed… [+6333 chars]"
    },
       {
    "source": {
    "id": null,
    "name": "Collider.com"
    },
    "author": "Rahul Malhotra",
    "title": "'Barbie' Continues to Dominate as 'Last Voyage of The Demeter' Sinks at Domestic Box Office - Collider",
    "description": "Both Barbie and Oppenheimer passed new milestones, while The Last Voyage of the Demeter delivered an underwhelming debut at the domestic box office.",
    "url": "https://collider.com/barbie-domestic-box-office-525-million/",
    "urlToImage": "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/07/barbie-budget-ryan-gosling-margot-robbie.jpg",
    "publishedAt": "2023-08-13T15:59:00Z",
    "content": "The Big Picture\r\n<ul><li>Barbie continues to dominate, grossing an estimated $33 million this weekend and will likely become Warner Bros.' biggest movie of all time in the US. </li><li>Oppenheimer ta… [+3270 chars]"
    },
       {
    "source": {
    "id": "newsweek",
    "name": "Newsweek"
    },
    "author": "Ellie Cook",
    "title": "Crimea Bridge Strikes 'Continue To Disrupt' Russian Logistics: ISW - Newsweek",
    "description": "Ukraine has pledged throughout its fight against Moscow to retake the annexed Crimean peninsula in the Black Sea.",
    "url": "https://www.newsweek.com/ukraine-russia-crimea-bridge-chonhar-kerch-strait-logistics-1819386",
    "urlToImage": "https://d.newsweek.com/en/full/2269018/crimea-kerch-bridge.jpg",
    "publishedAt": "2023-08-13T15:55:08Z",
    "content": "Kyiv's strikes on key bridges linking the annexed Crimean peninsula to southern Ukraine and to mainland Russia are impacting Moscow's ability to move resources and fend off Ukraine's ongoing countero… [+2928 chars]"
    },
       {
    "source": {
    "id": "politico",
    "name": "Politico"
    },
    "author": null,
    "title": "Pence 'hopeful' that special counsel will investigate Hunter Biden 'without fear or favor' - POLITICO",
    "description": "The GOP presidential hopeful also applauded House Republicans who have pushed for investigations into the Biden family.",
    "url": "https://www.politico.com/news/2023/08/13/pence-special-counsel-hunter-biden-without-fear-or-favor-00110984",
    "urlToImage": "https://static.politico.com/fe/8e/f3404e754c30810b48b77a242f79/election-2024-iowa-state-fair-99695.jpg",
    "publishedAt": "2023-08-13T15:38:48Z",
    "content": "While Pence said he welcomed the decision, he also applauded House Republicans who have relentlessly called for investigations into the Biden family.\r\nThe American people have a right to know whether… [+1414 chars]"
    },
       {
    "source": {
    "id": null,
    "name": "SciTechDaily"
    },
    "author": null,
    "title": "Breaking Physics: Muon G-2 Experiment Reinforces Surprise Result, Setting Up “Ultimate Showdown” - SciTechDaily",
    "description": "Findings at Fermilab show discrepancy between theory and experiment, which may lead to new physics beyond the Standard Model. Physicists now have a brand-new measurement of a property of the muon called the anomalous magnetic moment that improves the precisio…",
    "url": "https://scitechdaily.com/breaking-physics-muon-g-2-experiment-reinforces-surprise-result-setting-up-ultimate-showdown/",
    "urlToImage": "https://scitechdaily.com/images/Sub-Atomic-Particle-Quantum-Physics-Art-Illustration.jpg",
    "publishedAt": "2023-08-13T15:33:40Z",
    "content": "ByFermi National Accelerator LaboratoryAugust 13, 2023\r\nFermilabs Muon g-2 experiment has unveiled a new precision measurement of the muons magnetic property, hinting at undiscovered particles and a … [+10610 chars]"
    },
       {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "David Smith",
    "title": "‘People just want change’: political circus at Iowa state fair can’t dispel civic discontent - The Guardian US",
    "description": "Presidential aspirants make the pilgrimage to Des Moines amid a sense of America as nation sunk in a political depression",
    "url": "https://www.theguardian.com/us-news/2023/aug/13/iowa-state-fair-political-circus-trump-desantis-pence-ramaswamy-kennedy",
    "urlToImage": "https://i.guim.co.uk/img/media/d2c60ae9989db45fccd44646f71e4b1dae8445b1/0_54_3746_2249/master/3746.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0f252d83f9cac16f277728c23d7de17e",
    "publishedAt": "2023-08-13T15:11:00Z",
    "content": "Donald Trump held aloft a pork chop on a stick. Ron DeSantis and children rode bumper cars and a ferris wheel, played carnival games and ate snow cones and ice-cream. Vivek Ramaswamy rapped Lose Your… [+10379 chars]"
    },
       {
    "source": {
    "id": null,
    "name": "Rolling Stone"
    },
    "author": "Joseph Hudak",
    "title": "Morgan Wallen Shaves His Mullet — and Hopefully Kills a Hairstyle That Overstayed Its Welcome - Rolling Stone",
    "description": "It’s hair today, gone tomorrow for the country singer who was synonymous with the Tennessee waterfall",
    "url": "https://www.rollingstone.com/music/music-country/morgan-wallen-cuts-off-his-mullet-hair-1234806114/",
    "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2023/08/GettyImages-1426805983-3.jpg?w=1600&h=900&crop=1",
    "publishedAt": "2023-08-13T14:49:01Z",
    "content": "Morgan Wallen will always be known for more than a few things — including bringing the mullet hairstyle back into fashion. But no more. When Wallen took the stage Friday night at Ohio Stadium in Colu… [+1888 chars]"
    },
       {
    "source": {
    "id": null,
    "name": "CBS Sports"
    },
    "author": "",
    "title": "James Harden trade rumors: 76ers end talks with Clippers, plan to bring guard to training camp - CBS Sports",
    "description": "Harden requested a trade earlier this offseason",
    "url": "https://www.cbssports.com/nba/news/james-harden-trade-rumors-76ers-end-talks-with-clippers-plan-to-bring-guard-to-training-camp/",
    "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/07/18/20a60093-c975-4a23-888b-20a92ea3716a/thumbnail/1200x675/316bbc7d05d6521801ad18176d519594/james-harden-getty-11.png",
    "publishedAt": "2023-08-13T14:39:00Z",
    "content": "The Philadelphia 76ers have decided to end trade talks for James Harden and plan to bring him to training camp, CBS Sports' Bill Reiter confirmed. Harden had requested a trade earlier this offseason,… [+3086 chars]"
    },
       {
    "source": {
    "id": "associated-press",
    "name": "Associated Press"
    },
    "author": "CLAIRE RUSH, BEATRICE DUPUY, JENNIFER SINCO KELLEHER",
    "title": "As death toll from Maui wildfire reaches 93, effort to find and identify the dead is just beginning - The Associated Press",
    "description": "Authorities are warning that the effort to find and identify the dead in the Maui wildfire is just beginning. The blaze that razed a historic town and killed at least 93 people is already the deadliest U.S. wildfire in more than a century. Maui Police Chief J…",
    "url": "https://apnews.com/article/maui-hawaii-lahaina-deadliest-wildfire-fb2ebf6cd39c149a582b82eed6ac3930",
    "urlToImage": "https://dims.apnews.com/dims4/default/db3d7e9/2147483647/strip/true/crop/3900x2194+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F77%2Fe4%2F7243cefdb05aaa826605f63dec1a%2F8021c1cb27f84ef999c865ce6b543b19",
    "publishedAt": "2023-08-13T14:25:00Z",
    "content": "LAHAINA, Hawaii (AP) As the death toll from a wildfire that razed a historic Maui town climbed to 93, authorities warned that the effort to find and identify the dead was still in its early stages. T… [+6578 chars]"
    },
       {
    "source": {
    "id": "abc-news",
    "name": "ABC News"
    },
    "author": "Julia Jacobo, Kenton Gewecke",
    "title": "Extreme heat affecting 3rd of US residents Sunday, forecasts show - ABC News",
    "description": "Dangerous triple-digit temperatures are expected all over the country on Sunday.",
    "url": "https://abcnews.go.com/US/extreme-heat-affecting-3rd-us-residents-sunday-forecasts/story?id=102233204",
    "urlToImage": "https://s.abcnews.com/images/US/weather-heat-texas-ap-lv-231308_1691933563122_hpMain_16x9_992.jpg",
    "publishedAt": "2023-08-13T13:54:17Z",
    "content": "Extreme heat is continuing to impact a large portion of U.S. residents.\r\nThe National Weather Service issued heat alerts for about one-third of Americans on Sunday, as temperatures continue to remain… [+1960 chars]"
    },
       {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Guy Faulconbridge",
    "title": "Russian warship fires warning shots on cargo ship in Black Sea - Reuters.com",
    "description": "A Russian warship on Sunday fired warning shots at a cargo ship in the southwestern Black Sea as it made its way northwards, the first time Russia has fired on merchant shipping beyond Ukraine since exiting a landmark UN-brokered grain deal last month.",
    "url": "https://www.reuters.com/world/europe/russian-warship-fires-dry-cargo-ship-black-sea-defence-ministry-2023-08-13/",
    "urlToImage": "https://www.reuters.com/resizer/fWCC3rwcjGDRV9PvnEmOeeJYpRI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4WIA2KFYTJJAVLF7VYLZIXHM5A.jpg",
    "publishedAt": "2023-08-13T13:51:00Z",
    "content": "MOSCOW, Aug 13 (Reuters) - A Russian warship on Sunday fired warning shots at a cargo ship in the southwestern Black Sea as it made its way northwards, the first time Russia has fired on merchant shi… [+3561 chars]"
    },
       {
    "source": {
    "id": "financial-times",
    "name": "Financial Times"
    },
    "author": "Roman Olearchyk",
    "title": "Ukraine's civilian death toll mounts as Russia strikes Kherson - Financial Times",
    "description": "Shelling of villages comes as Russian warship fires warning shots on commercial vessel heading to Black Sea port",
    "url": "https://www.ft.com/content/a6910b36-8122-4803-b7bc-40e477c5d5b0",
    "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fbc16cf0f-da66-4496-afd8-e92d3b08209c.jpg?source=next-opengraph&fit=scale-down&width=900",
    "publishedAt": "2023-08-13T13:48:51Z",
    "content": "Russias invading forces shelled two villages in Ukraines Kherson region on Sunday, killing at least seven people including a newborn baby, Ukrainian officials have said.\r\nThe attack comes on the same… [+3189 chars]"
    },
       {
    "source": {
    "id": "usa-today",
    "name": "USA Today"
    },
    "author": "John Dillon",
    "title": "Chiefs vs. Saints preseason Week 1: 8 players to watch - Chiefs Wire",
    "description": "Keep your eye on these eight players when the #Chiefs play the #Saints in their first preseason game on Sunday.",
    "url": "https://chiefswire.usatoday.com/lists/kansas-city-chiefs-new-orleans-saints-preseason-week-1-players-to-watch/",
    "urlToImage": "https://chiefswire.usatoday.com/wp-content/uploads/sites/70/2023/04/USATSI_17061549.jpg?w=1024&h=576&crop=1",
    "publishedAt": "2023-08-13T13:45:00Z",
    "content": "Ted Gangi/CollegePressBox/Texas\r\nGiven the Chiefs ‘ instability on their defensive line, Coburn could be thrust into the spotlight early in his NFL career. Chris Jones is still holding out, Charles O… [+245 chars]"
    },
       {
    "source": {
    "id": "associated-press",
    "name": "Associated Press"
    },
    "author": "JONEL ALECCIA",
    "title": "Popular weight-loss drugs like Wegovy may raise risk of complications under anesthesia - The Associated Press",
    "description": "Patients taking blockbuster drugs like Wegovy for weight loss may face potentially deadly complications if they need surgery or other procedures that require empty stomachs for anesthesia. Experts say recent guidance to halt the medication for up to a week ma…",
    "url": "https://apnews.com/article/wegovy-ozempic-weight-loss-drugs-surgery-anesthesia-6e2556948334d0c6aa2ee0c7cbacb77d",
    "urlToImage": "https://dims.apnews.com/dims4/default/355662a/2147483647/strip/true/crop/6609x3718+0+344/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F23%2Fd6%2F90cafb9cd3ab567b305a9babdab0%2F93fb044f29f5449da86dc4c974012225",
    "publishedAt": "2023-08-13T13:34:00Z",
    "content": "Patients who take blockbuster drugs like Wegovy or Ozempic for weight loss may face life-threatening complications if they need surgery or other procedures that require empty stomachs for anesthesia.… [+5598 chars]"
    },
       {
    "source": {
    "id": null,
    "name": "NBCSports.com"
    },
    "author": "Josh Alper",
    "title": "Shane Steichen: Anthony Richardson showed \"great poise\" against Bills - NBC Sports",
    "description": "Colts rookie quarterback Anthony Richardson's first NFL drive didn't end the way he hoped it would.",
    "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/shane-steichen-anthony-richardson-showed-great-poise-against-bills",
    "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/2274bd4/2147483647/strip/true/crop/7407x4166+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.amazonaws.com%2Fbrightspot%2Ff6%2F38%2Feb45a20d4585a7122d4517c3c1af%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1610181377",
    "publishedAt": "2023-08-13T13:27:56Z",
    "content": "Colts rookie quarterback Anthony Richardsons first NFL drive didnt end the way he hoped it would. \r\nRichardson and wide receiver Isaiah McKenzie werent on the same page on a second down play and Rich… [+1190 chars]"
    }
    ] */

   static defaultProps = {
      country: 'in',
      pageSize: 15,
      category: 'general',
      apiKey: `79a4d82c033c445f94b5ca8e52390987`
   }

   static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
      apiKey: PropTypes.string,
   }
   constructor(props) {
      super(props);
      this.state = {
         articles: [],
         loading: false,
         page: 1
      };
      document.title=`${this.capializeFirstLtr(this.props.category)}-Prabhat-News App`;
   }
   async updateComponent() {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
         articles: parsedData.articles,
         totalResults: parsedData.totalResults,
         loading: false
      });
   }

   async componentDidMount() {
      /*  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
       this.setState({loading:true});
       let data = await fetch(url);
       let parsedData = await data.json();
       this.setState({ articles: parsedData.articles,
           totalResults: parsedData.totalResults,
           loading: false }); */
      this.updateComponent();
   }

   ClickNextBtn = async () => {
      /* if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
         this.setState({loading:true});
         let data = await fetch(url);
         let parsedData = await data.json();
         console.log("next btn");
         this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
         })
      } */
      this.setState({ page: this.state.page + 1 });
      this.updateComponent();
   }
   ClickPreviousBtn = async () => {
      /*    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
         this.setState({loading:true});
         let data = await fetch(url);
         let parsedData = await data.json();
         this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
   
         }) */
      this.setState({ page: this.state.page - 1 });
      this.updateComponent();
   }
   capializeFirstLtr=(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
   }
 

   render() {
      return (
         <>
            <div className="container my-3">
               <h3 className='my-4' style={{ textAlign: 'center', padding: '13px' }}>Prabhat News- Top {this.capializeFirstLtr(this.props.category)} Headlines</h3>
               {/* Loading component (spinner) */}
               {this.state.loading && <Loading />}

               <div className="row">
                  {this.state.articles.map((element) => {
                     return <div className="col-md-4" key={element.url}>
                        <NewsItems tittle={element.title ? element.title.slice(0, 100) : ""} description={element.description ? element.description.slice(0, 80) : ""} urlToImage={element.urlToImage} Newsurl={element.url} date={element.publishedAt} author={element.author} badge={element.source.name} />
                     </div>
                  })}
               </div><br />
               <div className="container d-flex justify-content-between">
                  <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.ClickPreviousBtn}>&larr; Previous</button>
                  <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.ClickNextBtn}>Next &rarr;</button>
               </div>
            </div>
         </>
      )
   }
}

export default News
