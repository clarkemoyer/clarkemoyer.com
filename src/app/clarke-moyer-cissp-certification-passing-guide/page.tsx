import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clarke Moyer CISSP Certification Passing Guide',
  description: 'Clarke Moyer\'s guide to passing the CISSP certification exam — study materials, training programs, and test strategies.',
  openGraph: {
    title: 'Clarke Moyer CISSP Certification Passing Guide | Clarke Moyer',
    description: 'Clarke Moyer\'s guide to passing the CISSP certification exam — study materials, training programs, and test strategies.',
    type: 'article',
    url: '/clarke-moyer-cissp-certification-passing-guide/',
  },
};

export default function CISSPGuidePage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link> / CISSP Certification Passing Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer CISSP Certification Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">BLUF: To pass the CISSP, do 4 things</h2>
            <ol className="list-decimal ml-6 space-y-2 text-blue-800">
              <li>Create a contest publicly with another person to complete your CISSP before they complete a similar or identical educational objective. (Note: I lost this &ldquo;race&rdquo; by one day but both of us still passed — so it&rsquo;s still a win.)</li>
              <li>Buy your vouchers and a training plan at the lowest cost possible from a source that will give you a test voucher and a re-take.</li>
              <li>Take a ton of practice tests from as many sources as your access or funding allows (ISC Official Online, Army Skillport).</li>
              <li>Don&rsquo;t over-study and test as soon as you&rsquo;re over the 80% pass percentage in the official tests. (This is why you have a re-take — so you don&rsquo;t over-study.)</li>
            </ol>
          </div>

          <p>
            My approach to passing the CISSP was slow and non-regimented. If you want to reduce your stress I would not
            follow my methods, but I did pass the first attempt and don&rsquo;t think that I over-studied.
          </p>

          <h2>Timeline</h2>
          <p>
            Each year I try and do at least one educational objective for my company performance review. I do this for several reasons:
          </p>
          <ol>
            <li>I like to learn new things and believe strongly in lifelong learning for the sake of expanding one&rsquo;s knowledge.</li>
            <li>I like having something external to my current work to show that I am not stagnating and by extension improving my resume with industry respected factors.</li>
            <li>When I do the performance reviews of others I don&rsquo;t want it to come off as &ldquo;do as I say not as I do&rdquo; when I ask for the educational objectives of others.</li>
          </ol>
          <p>In most years this educational objective aligns to an industry certification.</p>

          <h2>Books / Materials</h2>

          <h3>Sunflower CISSP Study Guide 2.0 (Free)</h3>
          <p>
            Great resource. I read cover to cover and had it laminated. Best part is it is free. I also put the PDF
            in the Kindle app on my phone but with the other apps I rarely used it this way because it is hard to read
            in such a small form factor.
          </p>
          <p><a href="https://docs.wixstatic.com/ugd/dc6afa_fc8dba86e57a4f3cb9aaf66aff6f9d22.pdf" target="_blank" rel="noopener noreferrer">Download PDF</a></p>

          <h3>CISSP: Certified Information Systems Security Professional Study Guide, 8th Edition (Free — Army Skillport)</h3>
          <p>
            This is the official book that goes with the official practice exam book mentioned later. Use the online
            tools provided by the book.
          </p>

          <h3>CISSP All-in-One Exam Guide, 8th Edition (Free — Army SkillPort)</h3>
          <p>Alternative vendor not direct from ISC(2). Use the online tools provided by the book.</p>

          <h2>Training Programs</h2>

          <h3>CIO/G-6 NETCOM IA – CISSP 2018 (Free with CAC)</h3>
          <p>
            Available via Army Skillport. Note: If you don&rsquo;t already have an account and are a contractor you must
            apply through your government IA rep and must be on IAT or IAM orders before they will grant you an account.
          </p>

          <h3>Simplilearn Online Classroom Flexi-Pass ($2,319)</h3>
          <p>
            Decent course but not as good as I wanted it to be. The videos were hard to download for offline use.
            All in all, I would do this only so that you have a formal course to go back to — the 5 practice tests were
            good. This package included a voucher and a re-take voucher (worth ~$1,398), so the course and tests
            effectively cost only $1,000. I would still not recommend this unless you are a very good self-study
            person. This course alone will not get it done.
          </p>

          <h2>Test / Quiz Options</h2>

          <h3>(ISC)² CISSP Official Study App ($10)</h3>
          <p>
            Great tool for vocabulary and quick mini-tests when you don&rsquo;t have time for a full 125-question test.
            I would do these tests anywhere and anytime.
          </p>

          <h3>Official Practice Test Book — ISC2 CISSP Official Practice Tests, 2nd Edition ($25)</h3>
          <p>
            I spent literally 15 hours of testing in this online portal. Best value overall. It was just released for
            the 2018 version and the online options for testing are the best of all the test banks I used. This is a
            must-buy for success in my mind.
          </p>

          <h3>CISSP SkillSet Pro Subscription ($90)</h3>
          <p>
            Most promising of the vendors I have not personally used.{' '}
            <a href="https://www.skillset.com/" target="_blank" rel="noopener noreferrer">skillset.com</a>
          </p>

          <h3>CISSP Practice Question Videos (Free)</h3>
          <p>
            <a href="https://www.youtube.com/channel/UCwUkAunxT1BNbmKVOSEoqYA" target="_blank" rel="noopener noreferrer">YouTube Channel</a>
          </p>

          <div className="mt-12 text-center not-prose">
            <Link href="/" className="text-blue-600 hover:underline font-medium">← Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
