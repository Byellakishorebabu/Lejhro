import  { useState, useEffect } from 'react';
import { Menu, X, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';
import MainImage from '../assets/herolejhro.png';
import { Button } from '../components/ui/button';

const Homepage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-amber-600'
          }`}
      >
        <div className="container mx-auto px-20 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold flex items-center">
              <span className={scrolled ? 'text-blue-500' : 'text-white'}>LEJHRO</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {!scrolled ? (
              <nav className="hidden xl:block">
                <ul className="flex space-x-8">
                  <li><a href="#" className="text-white hover:text-gray-200 font-medium" onClick={closeMenu}>Innovations</a></li>
                  <li><a href="#" className="text-white hover:text-gray-200 font-medium" onClick={closeMenu}>Business Services</a></li>
                  <li><a href="#" className="text-white hover:text-gray-200 font-medium" onClick={closeMenu}>Financial Services</a></li>
                  <li><a href="#" className="text-white hover:text-gray-200 font-medium" onClick={closeMenu}>Bootcamp</a></li>
                </ul>
              </nav>
            ) : (
              <a href="#" className="text-blue-500 font-medium hover:text-blue-700" onClick={closeMenu}>Let's Talk →</a>
            )}

            <Button
              onClick={toggleMenu}
              className={`p-2 rounded-full ${scrolled ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                }`}
              aria-label="Menu"
            >
              <Menu size={24} />
            </Button>
          </div>

          {/* Mobile Navigation Button - Only visible on mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-full ${scrolled ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                }`}
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {!scrolled && (
          <div className="container mx-auto px-20 pb-12 pt-8">
            <h1 className="text-4xl font-bold text-white">Blogs</h1>
          </div>
        )}
      </header>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>

          <div className="fixed top-0 right-0 h-full w-full md:w-1/2 lg:w-1/3 bg-white z-50 overflow-y-auto shadow-lg">
            <div className="px-6 py-6">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <div className="text-2xl font-bold flex items-center text-blue-500">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2" stroke="currentColor" fill="none" strokeWidth="2">
                    <path d="M21 8l-7-7L3 12h4v8h10v-8h4z" />
                  </svg>
                  LEJHRO
                </div>
                <Button onClick={toggleMenu} className="p-2 rounded-full border border-gray-200">
                  <X size={24} />
                </Button>
              </div>

              <nav className="mt-8">
                <ul className="space-y-6">
                  <li><a href="#" className="text-gray-800 text-xl font-medium hover:text-blue-500 block py-2" onClick={closeMenu}>Innovations</a></li>
                  <li><a href="#" className="text-gray-800 text-xl font-medium hover:text-blue-500 block py-2" onClick={closeMenu}>Bootcamp</a></li>
                  <li><a href="#" className="text-gray-800 text-xl font-medium hover:text-blue-500 block py-2" onClick={closeMenu}>Business Services</a></li>
                  <li><a href="#" className="text-gray-800 text-xl font-medium hover:text-blue-500 block py-2" onClick={closeMenu}>Financial Services</a></li>
                  <li><a href="#" className="text-gray-800 text-xl font-medium hover:text-blue-500 block py-2" onClick={closeMenu}>About</a></li>
                  <li><a href="#" className="text-gray-800 text-xl font-medium hover:text-blue-500 block py-2" onClick={closeMenu}>Contact Us</a></li>
                  <li><a href="#" className="text-gray-800 text-xl font-medium hover:text-blue-500 block py-2" onClick={closeMenu}>Blogs</a></li>
                </ul>
              </nav>

              <div className="mt-12 flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-500" onClick={closeMenu}>
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-500" onClick={closeMenu}>
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-500" onClick={closeMenu}>
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-500" onClick={closeMenu}>
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      <section className="flex-grow bg-gray-50">
        <div className="container my-20 max-w-4xl mx-auto p-6 rounded-lg shadow-lg bg-white">
          <article className="bg-white rounded-lg shadow-sm overflow-hidden max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 p-6">
              Statistical Approaches for Balancing Ethical Privacy & Data-Driven Innovation
            </h1>

            <div className="p-6">
              <div className="flex justify-center mb-8">
                <img
                  src={MainImage}
                  alt="Data privacy and innovation illustration"
                  className="w-full h-auto rounded"
                />
              </div>

              <div className="text-gray-700 text-lg space-y-4">
                <h2 className="text-2xl font-semibold mb-4">Introduction:</h2>
                <p>
                  Information communication technologies like online social networking, cloud computing,
                  telecommunications services and social media apps are growing more numerous, and the pace at which
                  technology is developing almost every day. As information society becomes inextricably rooted in the
                  Internet, Facebook, Amazon, Web Services, and the like, controllers, scholars, and technologists are
                  raising new questions about the pillars of particular data protection by similar information handling
                  and technological safeguards. Protected data is any information classified like medical protocol and
                  individual data protection.
                </p>
                <p>
                  When different associations possess datasets, host them at physical vaults, and subject them to various
                  protection regulations, the process of connecting them to draw new information insights,
                  recognizing new analytic prospects for biomedical research, and making the process of dealing with
                  numerous administrative sectors to accelerate growth, foster innovation, and drive productivity. With
                  this transformation, a new collaboration has led to exponential digital and remote work. Century
                  technologies of global reach that have superimposed up the organizational world to remote work, turning
                  worker tasks into a variable production blend of recognized creation and collaboration on the
                  sharing and editing.
                </p>

                <h4 className="text-2xl font-semibold mb-4">The significance of data privacy from a user and business perspective is as follows:-</h4>
                <h4 className="text-2xl font-semibold mb-4">For Individuals</h4>
                <p>
                  Individuals can be empowered by privacy laws to have control over their data, to know data usage, by whom, and why, and to control reuse data. The associations those collect particular data respond to these questions.
                </p>
                <h4 className="text-2xl font-semibold mb-4">From a Business Perspective</h4>
                <p>Recycling particular data cannot be done without businesses operating. Still, to stay biddable, personal data now has to be managed by companies in a transparent and biddable way, particular data they reuse has to be responsible for, and sequestration principles have to be cleaved to.</p>
                <p>Huge nonsupervisory forfeitures, loss of customer trust and data breaches are risked by them. Still, privacy laws GDPR, have pushed some companies into their digital metamorphosis giving a competitive advantage to sequestration-advanced companies.</p>
                <p>Meeting customer prospects to achieve competitive advantages in the form of advanced quality data, bettered client experience, and lesser investor appeal and brand can be done.</p>
                <h4 className="text-2xl font-semibold mb-4">Data-Driven Innovation</h4>
                <p>Big data serves thousands of innovative products, with numerous further processes and systems optimized through big data. Still, there is a subtle but important distinction between platforms that use data and platforms born from compliances within a data set.</p>
                <h4 className='text-2xl font-semibold mb-4'>A Case of Data-Driven Optimization</h4>
                <p>House of Cards by Netflix was one of its flagship programs. In 2013, this one show alone was claimed by 86 percent of their subscribers, eventually making them less likely to cancel their subscriptions. Still, the fascinating fact is that the show would be a hit before it vented, and Netflix knew it.</p>

                <p>By analyzing their data sets precisely, Netflix noticed a correlation between viewers of the original British House of Cards TV show and viewers of Kevin Spacey and director David Fincher. These three elements were brought together by Netflix in one how and, voila, an instant cult classic.</p>

                <h4 className='text-2xl font-semibold mb-4'>Holistic Approach to Data Privacy</h4>
                <p>The three core pillars need to be understood by associations to borrow this approach to data security:-</p>
                <h4 className='text-2xl font-semibold mb-4'>Sensitive data needs to be discovered and classified</h4>
                <p>Data is classified (linked and grouped), grounded on specific patterns and algorithms during discovery. The IT Professionals make further informed opinions about security, data sharing, data access, digital transformation, cloud migration, and remediation prioritization.</p>
                <h4>Securing Sensitive data</h4>
                <p>The threat of each data set to our business determines by data discovery and classification, and where to apply access controls and obfuscation security mechanisms can be prioritized, similar to train-position encryption with grainy access controls and tokenization with dynamic data masking. It signifies that data guarding happens by making it more delicate for unauthorized users to pierce it and making it undecipherable and useless if stolen or blurted.</p>
                <h4 className='text-2xl font-semibold mb-4'>Enforcement of Holistic Data Protection Strategy</h4>
                <ul className='pl-8'>
                  <li>1.Sensitive data are searched for in different data stores by set programs.</li>
                  <li>2.Discovering structured and unshaped data across an enterprise with effective reviews.</li>
                  <li>3.Data needs to be classified grounded on erected-in templates or custom requirements.</li>
                  <li>4.The pitfalls with rich visualizations and threat scores are understood.</li>
                  <li>5.Control of keys needs to be maintained using centralized crucial operations</li>
                </ul>
                <h4 className='text-2xl font-semibold mb-4'>Conclusion</h4>
                <p>The exponential growth of big data and the widespread adoption of data-driven technologies have opened up new opportunities for innovation, economic growth, and improved services in various sectors. These advancements have the potential to revolutionize industries, enhance decision-making processes, and benefit society as a whole.
                </p>
                <p>However, this data-driven revolution also brings to the forefront critical concerns surrounding privacy and data protection. As the collection, storage, and analysis of vast amounts of personal information become increasingly prevalent, individuals' privacy rights must be safeguarded to prevent misuse, unauthorized access, and potential breaches. The unauthorized sharing or sale of personal data can lead to serious consequences, including identity theft, financial fraud, and invasions of personal privacy.
                </p>
                <p>In conclusion, striking the delicate balance between data privacy and data-driven innovation is an ongoing journey that requires continuous efforts, adaptability, and a commitment to upholding the rights and dignity of individuals. By prioritizing privacy and ethics in conjunction with technological advancements, we can harness the full potential of big data for societal benefit while ensuring that data-driven innovation respects and protects the privacy of individuals.</p>
                <p>Lejhro has paramount importance in balancing data privacy and data-driven innovation. Join us to take a proactive stance in safeguarding the privacy of our users and customers. Let us actively engage with policymakers, industry peers, and privacy advocates to gain an understanding of the evolving landscape and best practices. Foster innovation by signing up today!</p>

                <div>
                  <a href="#" className='text-blue-500'>www.lejhro.com</a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Innovations</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Business Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Financial Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Lejhro Bootcamp</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Blogs</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Lejhro Bootcamp</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Terms of Use</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Privacy Statement</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold mb-4">Connect with us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="mt-12 text-center text-gray-500 text-sm">
            © 2025 LEJHRO. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;