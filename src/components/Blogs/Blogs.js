import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <article>
      <div className="question">
        <h1 className="question-title">Semantic Tag কি?</h1>
        <p className="question-answer">
          Semantic Tag হচ্ছে এক ধরনের Tag । যা Browser এবং Developer এর কাছে Meaning Full ভাবে প্রকাশ
          করে।যা স্বাধীন ,স্বয়ংসম্পূর্ণ বিষয় বস্তু নির্দিষ্ট করে।যা পড়ে সবাই বুঝতে পারে। Semantic
          Tag গুলো স্পষ্ট ভাবে তাদের উদ্দেশ্য এবং বিষয় বস্তু ধরণ বর্ননা করে।
        </p>
      </div>
      <div className="question">
        <h1 className="question-title">ইনলাইন , ব্লক এবং ইনলাইন-ব্লকের মধ্যে পার্থক্য কী?</h1>
        <p className="question-answer">
        একটি ডিফল্ট ডিসপ্লে মান থাকে, এটি কি ধরনের এলিমেন্টের উপর নির্ভর করে।।একটি ইনলাইন উপাদান একটি নতুন লাইন শুরু হয় না । একটি ইনলাইন উপাদান শুধুমাত্র প্রয়োজনীয়
          যতটা প্রস্থ নেয়।একটি ব্লক উপাদান সর্বদা একটি নতুন লাইনে শুরু হয় । ব্রাউজারগুলি
          স্বয়ংক্রিয়ভাবে উপাদানের আগে এবং পরে কিছু মার্জিন যোগ করে। ইনলাইন-ব্লকের এখানে প্রস্থ, উচ্চতা এবং প্যাডিং সম্মান করা হয়, তবে উপাদানটির দুটি কপি এখনও পাশাপাশি বসতে পারে।
        </p>
      </div>
    </article>
  );
};

export default Blogs;
