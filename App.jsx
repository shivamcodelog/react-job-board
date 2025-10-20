import Card from './comp/card'

const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay:"$120",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnm5CmL80RwspTM5fccqQGnp3IgQGMPDKgkA&s",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$95",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$85",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay:" $130",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png",
    companyName: "Google",
    datePosted: "4 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay:" $110",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay:" $90",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    post: "Autopilot Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay:" $125",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "1 week ago",
    post: "Research Scientist – AGI Alignment",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay:" $150",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "2 weeks ago",
    post: "GPU Systems Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$115",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "5 weeks ago",
    post: "Backend Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay:" $70",
    location: "Stockholm, Sweden"
  }
];


const App = () => {
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,i){
        return <div key={i} >
          <Card link={elem.brandLogo} company={elem.companyName} date={elem.datePosted}post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} place={elem.location}/>
        </div>
      })}
  

    </div>
  )
}

export default App
