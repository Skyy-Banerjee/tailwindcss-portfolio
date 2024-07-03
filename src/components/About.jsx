import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

function About() {
  return (
    <section className='bg-white py-20' id='about'>
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="about-img-svg" className='w-full h-64'/>
        <article>
            <SectionTitle text="code👨🏻‍💻 and coffee☕"/>
            <p className='text-slate-600 mt-8 leading-loose'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, provident a eligendi magnam itaque similique, officiis quasi minus iure voluptatem nisi neque. Esse rerum dolores voluptates corporis quisquam dolore magni voluptas, nemo vel eligendi accusamus sed facilis asperiores. Asperiores, totam.
            </p>
        </article>
      </div>
      
    </section>
  )
}

export default About
