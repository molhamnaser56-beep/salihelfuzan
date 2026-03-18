/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Book, 
  User, 
  Image as ImageIcon, 
  FileText, 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  X,
  ExternalLink,
  GraduationCap,
  Award
} from 'lucide-react';

const QUOTES = [
  { text: "التوحيد هو أصل الدين، وهو الذي بعثت من أجله الرسل، وأنزلت من أجله الكتب.", source: "من دروس العقيدة" },
  { text: "العلم ليس بكثرة الرواية، وإنما العلم الخشية.", source: "نصيحة لطلاب العلم" },
  { text: "الاستقامة على دين الله هي النجاة في الدنيا والآخرة.", source: "من خطب الجمعة" },
  { text: "الواجب على المسلم أن يحرص على تعلم دينه من المصادر الصحيحة.", source: "توجيهات عامة" }
];

const BOOKS = [
  { 
    title: "الملخص الفقهي (الجزء الأول)", 
    description: "كتاب جامع في الفقه الإسلامي ميسر للعامة والطلاب - الجزء الأول.",
    url: "https://dn721808.ca.archive.org/0/items/20230415_20230415_1032/%D8%A7%D9%84%D9%85%D9%84%D8%AE%D8%B5%20%D8%A7%D9%84%D9%81%D9%82%D9%87%D9%8A%D9%A1%20-%20%D8%B5%D8%A7%D9%84%D8%AD%20%D8%A7%D9%84%D9%81%D9%88%D8%B2%D8%A7%D9%86.pdf"
  },
  { 
    title: "الملخص الفقهي (الجزء الثاني)", 
    description: "كتاب جامع في الفقه الإسلامي ميسر للعامة والطلاب - الجزء الثاني.",
    url: "https://dn721808.ca.archive.org/0/items/20230415_20230415_1032/%D8%A7%D9%84%D9%85%D9%84%D8%AE%D8%B5%20%D8%A7%D9%84%D9%81%D9%82%D9%87%D9%8A%D9%A2%20-%20%D8%B5%D8%A7%D9%84%D8%AD%20%D8%A7%D9%84%D9%81%D9%88%D8%B2%D8%A7%D9%86.pdf"
  },
  { 
    title: "عقيدة التوحيد", 
    description: "شرح ميسر لأصول العقيدة الإسلامية الصحيحة.",
    url: "https://ia801801.us.archive.org/12/items/aquidate-at-tawhid-fawzan/%D8%B9%D9%82%D9%8A%D8%AF%D8%A9%20%D8%A7%D9%84%D8%AA%D9%88%D8%AD%D9%8A%D8%AF%20%20-%20%D9%83%D8%AA%D8%A7%D8%A8%20%D9%84%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B5%D8%A7%D9%84%D8%AD%20%D8%A7%D9%84%D9%81%D9%88%D8%B2%D8%A7%D9%86%20-%20%D8%A3%D8%AB%D8%A7%D8%A8%D9%87%20%D8%A7%D9%84%D9%84%D9%87..pdf"
  },
  { 
    title: "شرح الأصول الثلاثة", 
    description: "توضيح للأصول التي يجب على كل مسلم معرفتها.",
    url: "https://ia803201.us.archive.org/10/items/alosolalthalathah/3osol.pdf"
  },
  { 
    title: "الإرشاد إلى صحيح الاعتقاد", 
    description: "كتاب في الرد على أهل الشرك والإلحاد.",
    url: "https://dn710109.ca.archive.org/0/items/0232-pdf/0232%20pdf%20%D8%A7%D9%84%D8%A5%D8%B1%D8%B4%D8%A7%D8%AF%20%D8%A5%D9%84%D9%89%20%D8%B5%D8%AD%D9%8A%D8%AD%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AA%D9%82%D8%A7%D8%AF%20%D9%88%D8%A7%D9%84%D8%B1%D8%AF%20%D8%B9%D9%84%D9%89%20%D8%A3%D9%87%D9%84%20%D8%A7%D9%84%D8%B4%D8%B1%D9%83%20%D9%88%D8%A7%D9%84%D8%A5%D9%84%D8%AD%D8%A7%D8%AF%20%D9%84%D9%84%D8%B4%D9%8A%D8%AE%20%D8%A7%D9%84%D9%81%D9%88%D8%B2%D8%A7%D9%86.pdf"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2C2C2C] font-serif selection:bg-[#E6D5B8]" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-[#E6D5B8]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#5A5A40] tracking-tight">الشيخ صالح الفوزان</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <a href="#bio" className="hover:text-[#5A5A40] transition-colors">السيرة الذاتية</a>
              <a href="#quotes" className="hover:text-[#5A5A40] transition-colors">من أقواله</a>
              <a href="#books" className="hover:text-[#5A5A40] transition-colors">المؤلفات</a>
              <a href="#contact" className="hover:text-[#5A5A40] transition-colors">تواصل</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-[#5A5A40]">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-b border-[#E6D5B8]/30 px-4 pt-2 pb-6 space-y-4"
            >
              <a href="#bio" onClick={() => setIsMenuOpen(false)} className="block text-lg py-2 border-b border-[#F5F5F0]">السيرة الذاتية</a>
              <a href="#quotes" onClick={() => setIsMenuOpen(false)} className="block text-lg py-2 border-b border-[#F5F5F0]">من أقواله</a>
              <a href="#books" onClick={() => setIsMenuOpen(false)} className="block text-lg py-2 border-b border-[#F5F5F0]">المؤلفات</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-lg py-2">تواصل</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#E6D5B8] text-[#5A5A40] text-sm font-medium mb-6">عضو هيئة كبار العلماء</span>
              <h1 className="text-5xl lg:text-7xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                فضيلة الشيخ الدكتور <br />
                <span className="text-[#5A5A40]">صالح بن فوزان الفوزان</span>
              </h1>
              <p className="text-xl text-[#666] leading-relaxed mb-10 max-w-xl">
                أحد أبرز علماء المملكة العربية السعودية، وعضو هيئة كبار العلماء، وعضو اللجنة الدائمة للبحوث العلمية والإفتاء.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#bio" className="bg-[#5A5A40] text-white px-8 py-4 rounded-full text-lg hover:bg-[#4A4A30] transition-all shadow-lg shadow-[#5A5A40]/20">
                  اقرأ السيرة الذاتية
                </a>
                <a href="#books" className="border-2 border-[#5A5A40] text-[#5A5A40] px-8 py-4 rounded-full text-lg hover:bg-[#5A5A40] hover:text-white transition-all">
                  تصفح المؤلفات
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://archive.org/download/20240114_20240114_0801ee/20240114_20240114_0801ee.thumbs/%D8%B5%D8%A7%D9%84%D8%AD%20%D8%A8%D9%86%20%D9%81%D9%88%D8%B2%D8%A7%D9%86%20%D8%A7%D9%84%D9%81%D9%88%D8%B2%D8%A7%D9%86%20-%20%D8%A3%D8%B3%D8%A6%D9%84%D8%A9%20%D9%88%D9%81%D8%AA%D8%A7%D9%88%D9%8A%20%D8%AA%D8%AA%D8%B9%D9%84%D9%82%20%D8%A8%D9%85%D8%B3%D8%A7%D8%A6%D9%84%20%D8%A7%D9%84%D9%82%D8%AF%D8%B1_000060.jpg" 
                  alt="الشيخ صالح الفوزان" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-[#F5F5F0] hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5F5F0] flex items-center justify-center text-[#5A5A40]">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[#666]">عضو اللجنة الدائمة</p>
                    <p className="font-bold text-[#1A1A1A]">للبحوث العلمية والإفتاء</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F5F5F0] -z-10 rounded-bl-[10rem]" />
      </section>

      {/* Bio Section */}
      <section id="bio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">السيرة الذاتية</h2>
            <div className="w-24 h-1 bg-[#5A5A40] mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FDFCF8] p-8 rounded-3xl border border-[#F5F5F0] hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#E6D5B8] rounded-2xl flex items-center justify-center text-[#5A5A40] mb-6">
                <User size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">النشأة والتعليم</h3>
              <p className="text-[#666] leading-relaxed">
                ولد عام 1354هـ في مدينة الشماسية بمنطقة القصيم. تلقى تعليمه الأولي في بلدته، ثم التحق بالمعهد العلمي في بريدة، وتخرج من كلية الشريعة بالرياض عام 1381هـ.
              </p>
            </div>
            
            <div className="bg-[#FDFCF8] p-8 rounded-3xl border border-[#F5F5F0] hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#E6D5B8] rounded-2xl flex items-center justify-center text-[#5A5A40] mb-6">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">المسيرة العلمية</h3>
              <p className="text-[#666] leading-relaxed">
                حصل على الماجستير والدكتوراه من كلية الشريعة بجامعة الإمام محمد بن سعود الإسلامية. تدرج في الرتب العلمية حتى نال درجة الأستاذية (بروفيسور).
              </p>
            </div>
            
            <div className="bg-[#FDFCF8] p-8 rounded-3xl border border-[#F5F5F0] hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#E6D5B8] rounded-2xl flex items-center justify-center text-[#5A5A40] mb-6">
                <FileText size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">المناصب الرسمية</h3>
              <p className="text-[#666] leading-relaxed">
                عضو هيئة كبار العلماء، وعضو اللجنة الدائمة للبحوث العلمية والإفتاء، وإمام وخطيب جامع الأمير متعب بن عبد العزيز بالرياض.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Section (Replacement for Gallery) */}
      <section id="quotes" className="py-24 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">من أقوال الشيخ</h2>
            <div className="w-24 h-1 bg-[#5A5A40] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {QUOTES.map((quote, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-[#E6D5B8]/30 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <FileText size={120} />
                </div>
                <p className="text-2xl text-[#1A1A1A] mb-6 leading-relaxed font-bold italic">
                  "{quote.text}"
                </p>
                <div className="flex items-center gap-3 text-[#5A5A40]">
                  <div className="w-8 h-[2px] bg-[#5A5A40]" />
                  <span className="text-sm font-medium">{quote.source}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">أبرز المؤلفات</h2>
              <div className="w-24 h-1 bg-[#5A5A40] rounded-full" />
            </div>
            <p className="text-[#666] max-w-md">
              أثرى الشيخ المكتبة الإسلامية بعشرات الكتب والمؤلفات في العقيدة والفقه والحديث، والتي تدرس في العديد من المعاهد والجامعات.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {BOOKS.map((book, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2rem] bg-[#FDFCF8] border border-[#F5F5F0] flex flex-col items-center text-center group h-full"
              >
                <div className="w-16 h-16 bg-[#F5F5F0] rounded-2xl flex items-center justify-center text-[#5A5A40] mb-6 group-hover:bg-[#5A5A40] group-hover:text-white transition-colors">
                  <Book size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{book.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed mb-6 flex-grow">{book.description}</p>
                <a 
                  href={book.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-2 text-[#5A5A40] font-bold hover:underline"
                >
                  <span>تحميل الكتاب</span>
                  <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1A1A1A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">الشيخ صالح الفوزان</h3>
              <p className="text-gray-400 leading-relaxed">
                موقع تعريفي بفضيلة الشيخ صالح بن فوزان الفوزان، يهدف لنشر علمه وسيرته العطرة لطلاب العلم والباحثين.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#bio" className="hover:text-white transition-colors">السيرة الذاتية</a></li>
                <li><a href="#quotes" className="hover:text-white transition-colors">من أقواله</a></li>
                <li><a href="#books" className="hover:text-white transition-colors">المؤلفات العلمية</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الموقع الرسمي للشيخ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">تواصل معنا</h4>
              <p className="text-gray-400 mb-6">للمقترحات أو الاستفسارات حول المحتوى العلمي.</p>
              <button className="flex items-center gap-2 bg-[#5A5A40] px-6 py-3 rounded-full hover:bg-[#4A4A30] transition-all">
                <span>راسلنا الآن</span>
                <ExternalLink size={18} />
              </button>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} جميع الحقوق محفوظة - موقع فضيلة الشيخ صالح الفوزان</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
