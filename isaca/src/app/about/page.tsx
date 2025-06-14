import React from 'react';
import AboutIntro from './components/AboutIntro';
import Container from '../components/Container';
import Button from '../components/Button';
import TeamSection from './components/TeamDescriptions';

export default function AboutPage(){
    return (
      <Container>
        <AboutIntro />

        {/* External Link Buttons */}
        <div className='flex justify-center mb-10'>
          <Button
            description='Puget Sound Chapter'
            link='https://engage.isaca.org/pugetsoundchapter/home'>
          </Button>
          <Button
            description='Global Chapter'
            link='https://www.isaca.org/'>
          </Button>
        </div>

        <img src="imgs/lecture.jpeg" alt="professor lecturing" className="rounded-lg hover:shadow-xl/20 transition duration-400 ease-in-out" />

        <h2 className="text-3xl font-semibold text-navy-blue mt-10">
          ISACA Puget Sound Scholarship
        </h2>

        {/* Scholarship Description */}
        <section className="grid md:grid-cols-2 items-center gap-8">

          <div>
            <p className="mt-4 mb-4 text-base">
            Sponsored by the ISACA Puget Sound Chapter, ISACA UW students have the opportunity to
            write a cybersecurity-related paper for the chance to earn a $5,000 tuition scholarship.
            </p>

            <Button description='learn more' link='https://engage.isaca.org/pugetsoundchapter/home'></Button>
          </div>
        </section>

        {/* Our Team */}
        <section>
          <h2 className="text-3xl font-semibold text-navy-blue mt-10 mb-8">
            Our Team
          </h2>
          <div className='flex flex-row'>
            <TeamSection></TeamSection>
          </div>

        </section>
      </Container>
    );
  }