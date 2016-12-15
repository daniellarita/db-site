import React from 'react';

class Resume extends React.Component {

  render () {
    return (
      <div className="resume">
          {/*<head>
            <title>Daniella Baxter's Resume</title>
            <h1>Daniella R. Baxter</h1>
            <p id="my-info">♦ 110 Wall Street, Unit 1014, New York, New York 10005 ♦ (216) 577-1033 ♦ drbaxter821@gmail.com ♦</p>
          </head>*/}
        
          
        {/*<style>
          h1{
            text-align: center;
            font-size: 275%;
          }
          #my-info{
            text-align:center;
          }
          h2{
            border-bottom-color: black;
            border-bottom-width: 2px;
            border-bottom-style: solid;
          }
          body{
            margin: 70px 70px 70px 70px;
            font: normal 10px Arial, sans-serif;
          }
        </style>*/}

          <h2>Career Experience</h2>

          <h3>WeWork – New York, NY</h3>     June 2015 – present

          <h5>Software Engineer in Test (June 2016 – present)</h5>
            <ul>
              <li>Build and maintain automated test suites across product lines</li>
              <li>Build and maintain automated test infrastructure</li>
            </ul>

          <h5>QA Associate (October 2015 – June 2016)</h5>
            <ul>
              <li>Implement and maintain first QA Strategy / defect management process for all products spanning across the entire department (4 teams, 30 people in total)</li>
              <li>Develop project management workflows and other tools to deliver products efficiently</li>
              <li>Create and monitor defect tracking dashboard</li>
              <li>Create and execute test cases and test plans for all new products and features spanning 2
          large scale product lines and iOS / Android mobile applications</li>
            </ul>

          <h5>Digital Support Associate (June 2015 – September 2015)</h5>
            <ul>
              <li>Answered all support tickets and presented findings in order to help guide product decisions</li>
              <li>Developed and executed usability testing and focus groups for user research purposes</li>
              <li>Managed initiatives to increase user engagement within digital member products</li>
              <li>Trained new customer support employees</li>
            </ul>

          <h3>EY – New York, NY</h3>    September 2014 – May 2015

          <h5>Technology Advisor Program Staff</h5>
            <ul>
              <li>Analyze data and test IT application controls for financial services client</li>
              <li>Primary contact between client and EY team to analyze evidence needed for testing</li>
              <li>Assist in recruiting efforts at alma mater</li>
            </ul>

          <h5>Technology Advisor Program Intern (Summer 2013)</h5>
            <ul>
              <li>Develop compliance oversight program for third party lifecycle management program at financial services client</li>
              <li>Manage project plan and PMO log</li>
              <li>Perform comparison analysis of internal risk and issue management procedures and three compliance oversight plans</li>
              <li>Manage assignments of resources to work streams</li>
            </ul>

          <h2>Related Experience</h2>

          <h3>Civic Hall – New York, NY – Community Ambassador</h3>   March 2015 – June 2015
            <ul>
              <li>Assist in managing members, events and space for this civic innovation community</li>
            </ul>

          <h3>Lehigh University in Tanzania – Sustainable Development Solutions Team</h3>              Summer 2014
            <ul>
              <li>Assistant lecturer at Mt. Meru University on AIDS, psychology, educational leadership</li>
              <li>Created partnership via laptop donation between NAFGEM and Lehigh</li>
              <li>Assisted focus groups regarding special education practices at Gracious School</li>
            </ul>


          <h3>Lehigh-Silicon Valley Entrepreneurship Program – Student Analyst</h3>                        Winter 2013
            <ul>
              <li>Participated in case studies and break-out sessions with venture capital firms and entrepreneurs (Zoosk, NetApp, OnPharma, NEA, Capricorn, WTI, Sofinnova, ECP and DoughMain)</li>
            </ul>

          <h2>Education</h2>
          <p>Lehigh University, Bethlehem, PA, College of Business and Economics, 2010-2014</p>
          <p>Dean’s List 2010-2014</p>
          <p>Majors: B.S. Financial Marketing and B.S. Business Information Systems; Minor: Psychology</p>
          <p>Strohl Research Grant Recipient</p>

          <h2>Skills</h2>
          <p>Javascript ♦ HTML ♦ CSS ♦ Node.js ♦ Express.js ♦ QA Engineering ♦ Test Automation ♦ Ruby ♦ Capybara ♦ Project Management ♦ SQL ♦ User Acceptance Testing ♦ Visio ♦ SAP ♦ Usability Testing ♦ User Research
          </p>
          
      </div>
    );
  }
}

export default Resume;
