(function(){
  var BN = {"Students": "শিক্ষার্থী", "Calendar": "ক্যালেন্ডার", "Fees": "ফি", "Attendance": "উপস্থিতি", "Tests": "পরীক্ষা", "Owner": "মালিক", "Home": "হোম", "Homework": "হোমওয়ার্ক", "Parent app": "অভিভাবক অ্যাপ", "Owner dashboard": "মালিকের ড্যাশবোর্ড", "Centre at a glance": "কেন্দ্রের এক নজরে", "Add, edit or remove": "যোগ, সম্পাদনা বা মুছুন", "Edit details, tests, homework, attendance": "বিবরণ, পরীক্ষা, হোমওয়ার্ক ও উপস্থিতি সম্পাদনা", "Pending fees and days late": "বকেয়া ফি ও দেরির দিন", "Today's batch": "আজকের ব্যাচ", "Weekly score and rank": "সাপ্তাহিক স্কোর ও র‍্যাঙ্ক", "Holidays, events, attendance": "ছুটি, অনুষ্ঠান, উপস্থিতি", "What parents see": "অভিভাবকরা যা দেখেন", "Attendance, fees and tests": "উপস্থিতি, ফি ও পরীক্ষা", "Monthly calendar": "মাসিক ক্যালেন্ডার", "Tick off what is done": "যা হয়েছে তা টিক দিন", "Last test scores": "শেষ পরীক্ষার স্কোর", "LOGIN": "লগইন", "Login": "লগইন", "Password": "পাসওয়ার্ড", "Username ya mobile number": "ইউজারনেম বা মোবাইল নম্বর", "Kholein": "খুলুন", "Teacher login": "শিক্ষক লগইন", "Parent login": "অভিভাবক লগইন", "PIN": "পিন", "Save": "সেভ করুন", "Save changes": "পরিবর্তন সেভ করুন", "Add": "যোগ করুন", "Remind": "মনে করিয়ে দিন", "Reminder": "অনুস্মারক", "Verify paid": "পেমেন্ট যাচাই করুন", "Undo": "ফেরত নিন", "Logout": "লগআউট", "Log out": "লগআউট", "Save attendance": "উপস্থিতি সেভ করুন", "Pay by UPI": "UPI তে পেমেন্ট", "Notifications": "বিজ্ঞপ্তি", "Share report on WhatsApp": "WhatsApp এ রিপোর্ট শেয়ার করুন", "Try again": "আবার চেষ্টা করুন", "Delete student": "ছাত্র মুছুন", "Student delete karein": "ছাত্র মুছুন", "Changes save karein": "পরিবর্তন সেভ করুন", "Paid": "পরিশোধিত", "Not due yet": "এখনো বকেয়া নয়", "Present": "উপস্থিত", "Absent": "অনুপস্থিত", "Holiday": "ছুটি", "Events": "অনুষ্ঠান", "Percentage": "শতাংশ", "Fee history": "ফি-এর ইতিহাস", "Rank": "র‍্যাঙ্ক", "Weekly score": "সাপ্তাহিক স্কোর", "Last test": "শেষ পরীক্ষা", "attendance": "উপস্থিতি", "students": "শিক্ষার্থী", "Batch": "ব্যাচ", "Class": "ক্লাস", "Subject": "বিষয়", "Due date": "শেষ তারিখ", "Monthly fee (₹)": "মাসিক ফি (₹)", "Student name": "ছাত্রের নাম", "Syllabus / Board": "সিলেবাস / বোর্ড", "Batch A / B": "ব্যাচ A / B", "Collection UPI ID": "সংগ্রহের UPI ID", "New referral enquiries": "নতুন রেফারেল জিজ্ঞাসা", "Fees collected (paid students)": "ফি সংগ্রহ (পরিশোধিত ছাত্র)", "Total pending": "মোট বকেয়া", "Loading data…": "তথ্য লোড হচ্ছে…"};
  function lang(){ return localStorage.getItem('td_lang') || 'en'; }
  function setLang(l){ localStorage.setItem('td_lang', l); location.reload(); }
  // Replace each text node that exactly matches an English key with its Bengali text
  function apply(root){
    if (lang() !== 'bn') return;
    var w = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) {
      var t = n.nodeValue.trim();
      if (t && BN[t]) n.nodeValue = n.nodeValue.replace(t, BN[t]);
    }
    document.querySelectorAll('[placeholder]').forEach(function(el){
      var p = el.getAttribute('placeholder');
      if (p && BN[p]) el.setAttribute('placeholder', BN[p]);
    });
  }
  window.TD_I18N = { apply: apply, lang: lang, setLang: setLang, BN: BN };
})();
