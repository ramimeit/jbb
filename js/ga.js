
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&amp;l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl+'&amp;c='+Math.random();f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NWNPPB8T');

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XLP8QDFD0L', {
    'anonymize_ip': true,
    'send_page_view': true
  });

  // ১. থিম ট্র্যাকিং (কোন কোন ডোমেইনে আপনার থিমটি চলছে)
  gtag('event', 'theme_usage_monitor', {
    'domain_name': window.location.hostname,
    'theme_id': 'janabhumibarta_v1',
    'full_url': window.location.href
  });

  // ২. কন্টেন্ট কপি ট্র্যাকিং (ঠিক কী কপি করা হয়েছে তা দেখার জন্য)
  document.addEventListener('copy', function() {
    var selectedText = window.getSelection().toString();
    if (selectedText.length > 0) {
      gtag('event', 'content_copy_alert', {
        'copied_data': selectedText.substring(0, 250), // কপি করা লেখার প্রথম ২৫০ অক্ষর
        'page_title': document.title,
        'source_domain': window.location.hostname
      });
    }
  });

  // ৩. ডাউনলোড ট্র্যাকিং (যেকোনো ফাইল বা ছবি ডাউনলোড করলে)
  document.addEventListener('click', function(e) {
    var element = e.target.closest('a');
    if (element && element.href) {
      var fileUrl = element.href;
      var isDownload = /\.(zip|pdf|docx|txt|jpg|jpeg|png|gif|mp3|mp4|exe)$/i.test(fileUrl);
      if (isDownload) {
        gtag('event', 'file_download_tracking', {
          'file_name': fileUrl.substring(fileUrl.lastIndexOf('/') + 1),
          'file_url': fileUrl
        });
      }
    }
  });

  // ৪. সোশ্যাল মিডিয়া শেয়ার ট্র্যাকিং (ফেসবুক বা হোয়াটসঅ্যাপ ক্লিক)
  document.addEventListener('click', function(e) {
    let link = e.target.closest('a');
    if (link && (link.href.includes('facebook.com') || link.href.includes('whatsapp.com'))) {
      gtag('event', 'social_share', {
        'platform': link.href.includes('facebook') ? 'Facebook' : 'WhatsApp',
        'news_link': window.location.pathname
      });
    }
  });

  // ৫. রিডিং টাইম ট্র্যাকিং (ভিজিটর কতক্ষণ নিউজ পড়ছে)
  let userStartTime = Date.now();
  window.addEventListener('beforeunload', function() {
    let stayDuration = Math.round((Date.now() - userStartTime) / 1000);
    if (stayDuration > 5) {
      gtag('event', 'visitor_stay_time', {
        'seconds': stayDuration,
        'page_path': window.location.pathname
      });
    }
  });

  // ৬. আউটবাউন্ড ক্লিক (আপনার সাইট থেকে অন্য সাইটে চলে গেলে)
  document.addEventListener('click', function(e) {
    let targetLink = e.target.closest('a');
    if (targetLink && targetLink.hostname !== window.location.hostname) {
      gtag('event', 'exit_link_click', {
        'destination': targetLink.href,
        'link_text': targetLink.innerText || 'Icon/Image'
      });
    }
  });

  // ৭. ইমেজ ক্লিক ট্র্যাকিং (ছবির ওপর ক্লিক করলে)
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
      gtag('event', 'image_view_click', {
        'img_src': e.target.src,
        'on_page': window.location.pathname
      });
    }
  });
