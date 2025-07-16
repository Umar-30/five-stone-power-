'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';


export const Blog1 = () => {
    
interface Comment {
    id: number;
    body: string;
    postId: number;
    user: {
      id: number;
      username: string;
  }
  }
  
  
  const fetchComments = async (): Promise<Comment[]> => {
    const response = await fetch('https://dummyjson.com/comments');
    const data = await response.json();
    return data.comments;
  };
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchComments().then(setComments).catch(console.error);
  }, [fetchComments]);
  const handleAddComment = () => {
    const inputElements = document.getElementsByTagName('input');
    const textAreaElements = document.getElementsByTagName('textarea');
    if (inputElements.length > 0 && textAreaElements.length > 0) {
      const username = inputElements[0].value.trim();
      const userComment = textAreaElements[0].value.trim();
      
      if (username && userComment) {
        const newComment = {
          id: comments.length + 1,
          body: userComment,
          postId: 1,
          user: {
            id: comments.length + 1,
            username: username,
          },
        };
        setComments([newComment, ...comments]);
        inputElements[0].value = ''; // Clear input
        textAreaElements[0].value = ''; // Clear textarea
  

      } else {
        alert('Please enter both a name and a comment.');
      }
    }
  };
  return (
    <div className="blog-container">
      <Image
        src="https://drmichellebengtson.com/wp-content/uploads/2024/03/God-will-see-you-through-2.jpg" 
        alt="Faith – Trusting God" 
        width={900} 
        height={400} 
        className="rounded-lg mb-6 mx-auto"
      />
      <h1>Faith – Trusting God</h1>
      <p>Faith is not just a feeling or a belief; it is the deep trust in God even when circumstances seem unclear, painful, or confusing. True faith begins where our sight ends — when we can no longer rely on what we see, but still choose to believe in God’s promises.

In life, we all face moments when things don’t go as planned. Prayers may seem unanswered, challenges may become overwhelming, and the future may look uncertain. It is in these times that faith is truly tested. Trusting God beyond what we see means believing that He is working all things together for our good, even when we can’t trace His hand.

Hebrews 11:1 reminds us, “Now faith is the substance of things hoped for, the evidence of things not seen.” This verse teaches us that faith involves trusting in God's unseen hand, His perfect timing, and His unshakable love. It means leaning not on our own understanding but surrendering to His divine will.

Many great people of faith in the Bible demonstrated this kind of trust. Abraham believed God's promise of a son even when it seemed impossible. Moses followed God's command to lead Israel through the Red Sea without knowing how it would part. Mary accepted the angel’s message that she would bear the Savior of the world, even though she couldn’t see the full picture.

Faith grows strongest not in comfort but in challenge. It is easy to trust when life is smooth. But when storms rage, faith becomes our anchor. It helps us say, “Even though I don’t see a way, I know God will make one.” Faith lifts our eyes beyond the natural and connects us to the supernatural — to a God who is greater than our problems.

Faith also reminds us that we walk by faith, not by sight (2 Corinthians 5:7). We don’t always need to know the details because we know the One who holds the details. Trusting God beyond what we see builds our character, strengthens our spirit, and draws us closer to Him.

In every dark valley, in every delayed promise, and in every uncertain moment, may we learn to say, “Lord, I trust You.” Not because we see, but because we believe.</p>
      <p><b>Conclusion:</b> Faith means trusting God even when we can’t see the full picture. In times of doubt, delay, or darkness, true faith holds on to God’s promises. He knows what we don’t and sees beyond what we can. Even when life doesn’t make sense, we can say with confidence:
      <b>“Lord, I trust You.”</b></p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Comments</h2>
        {comments.length > 0 ? (
  comments.slice(0, 4).map((comment, index) => (
    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md my-4">
      <p className="text-gray-800">
        <b>{comment.user.username}</b>: {comment.body}
      </p>
    </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}

  <div className="mt-4">
          <h3 className="text-lg font-bold">Add a Comment</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <textarea
            placeholder="Write your comment here..."
            className="border border-gray-300 p-2 rounded-md w-full"
            rows={2}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white p-2 rounded-md mt-2"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export const Blog2 = () => {
    
interface Comment {
    id: number;
    body: string;
    postId: number;
    user: {
      id: number;
      username: string;
  }
  }
  
  
  const fetchComments = async (): Promise<Comment[]> => {
    const response = await fetch('https://dummyjson.com/comments');
    const data = await response.json();
    return data.comments;
  };
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchComments().then(setComments).catch(console.error);
  }, [fetchComments]);
  const handleAddComment = () => {
    const inputElements = document.getElementsByTagName('input');
    const textAreaElements = document.getElementsByTagName('textarea');
    if (inputElements.length > 0 && textAreaElements.length > 0) {
      const username = inputElements[0].value.trim();
      const userComment = textAreaElements[0].value.trim();
      
      if (username && userComment) {
        const newComment = {
          id: comments.length + 1,
          body: userComment,
          postId: 1,
          user: {
            id: comments.length + 1,
            username: username,
          },
        };
        setComments([newComment, ...comments]);
        inputElements[0].value = ''; // Clear input
        textAreaElements[0].value = ''; // Clear textarea
        const userDataElement = document.getElementById('userdata');
        if (userDataElement) {
          userDataElement.innerHTML = '<b>' + username + '</b>: ' + userComment;
        }

      } else {
        alert('Please enter both a name and a comment.');
      }
    }
  };
  return (
    <div className="blog-container">
      <Image 
        src="https://i0.wp.com/www.peterdehaan.com/wp-content/uploads/2022/08/how-do-we-worship-God.jpg?fit=1200%2C675&ssl=1" 
        alt="worship" 
        width={900} 
        height={400} 
        className="rounded-lg mb-6 mx-auto"
      />
      <h1>Worship – Honoring God with Our Whole Being</h1>
      <p>Worship is more than just singing songs at church—it’s a way of life. It means showing love, respect, and devotion to God in everything we do. True worship comes from the heart and includes our words, actions, and thoughts.

<br/><b>What Is Worship?</b>
Worship is giving God the highest place in our lives. We worship not only for what He does, but for who He is—holy, loving, and powerful.

<br/><b>More Than Music</b>
Worship isn’t just music. We also worship when we pray, help others, read the Bible, use our gifts, or trust God in difficult times. Anything done to honor God is worship.

<br/><b>With Our Whole Life</b>
God wants all of us—our mind, body, and spirit. Worship means living in a way that reflects His love every day, not just on Sundays.
</p>
      <p><b>Conclusion:</b>Worship is a daily lifestyle. It’s about loving God and living to please Him with our whole being. When we do that, we grow closer to Him and shine His light to others.</p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Comments</h2>
        {comments.length > 0 ? (
  comments.slice(0, 4).map((comment, index) => (
    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md my-4">
      <p className="text-gray-800">
        <b>{comment.user.username}</b>: {comment.body}
      </p>
    </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}

  <div className="mt-4">
          <h3 className="text-lg font-bold">Add a Comment</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <textarea
            placeholder="Write your comment here..."
            className="border border-gray-300 p-2 rounded-md w-full"
            rows={2}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white p-2 rounded-md mt-2"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export const Blog3 = () => {
    
interface Comment {
    id: number;
    body: string;
    postId: number;
    user: {
      id: number;
      username: string;
  }
  }
  const [comments, setComments] = useState<Comment[]>([]);
  
  
  const fetchComments = async (): Promise<Comment[]> => {
    const response = await fetch('https://dummyjson.com/comments');
    const data = await response.json();
    return data.comments;
  };

  useEffect(() => {
    fetchComments().then(setComments).catch(console.error);
  }, [fetchComments]);
  const handleAddComment = () => {
    const inputElements = document.getElementsByTagName('input');
    const textAreaElements = document.getElementsByTagName('textarea');
    if (inputElements.length > 0 && textAreaElements.length > 0) {
      const username = inputElements[0].value.trim();
      const userComment = textAreaElements[0].value.trim();
      
      if (username && userComment) {
        const newComment = {
          id: comments.length + 1,
          body: userComment,
          postId: 1,
          user: {
            id: comments.length + 1,
            username: username,
          },
        };
        setComments([newComment, ...comments]);
        inputElements[0].value = ''; // Clear input
        textAreaElements[0].value = ''; // Clear textarea
       

      } else {
        alert('Please enter both a name and a comment.');
      }
    }
  };

  return (
    <div className="blog-container">
      <Image 
        src="https://sanctifiedbychrist.com/wp-content/uploads/2017/12/slide-1.jpg" 
        alt="Build Strong, Faith-Filled Communities" 
        width={900} 
        height={400} 
        className="rounded-lg mb-6 mx-auto"
      />
      <h1>Our Mission: Build Strong, Faith-Filled Communities</h1>
      <p>In today’s fast-moving world, many people feel alone, broken, or unsure of where they belong. That’s why our mission is so important — to build strong, faith-filled communities where people can grow in love, truth, and hope.

<br/><b>What Is a Faith-Filled Community?</b>
A faith-filled community is more than just a group of people who believe in God. It is a place where hearts are connected through love, prayer, and support. In such a community, people encourage one another, help each other in times of need, and walk together in faith.

<br/><b>Why Strong Communities Matter</b>
Strong communities give people a sense of belonging. They become a safe place where individuals can share their joys and struggles. Children grow in a healthy spiritual environment, families find support, and the elderly are cared for. When people come together with faith, they are stronger, kinder, and more united.

<br/><b>How Do We Build These Communities?</b>
<br/><b>.Through Prayer:</b> We pray together to stay connected to God and to each other.

<br/><b>.By Teaching God's Word:</b> The Bible gives us wisdom and guidance for everyday life.

<br/><b>.With Acts of Kindness: </b>Helping one another brings joy and builds trust.

<br/><b>.By Encouraging One Another:</b> A kind word or small support can uplift a person’s spirit.

<br/><b>.Through Worship and Fellowship:</b> Spending time together in worship strengthens our bond with God and with each other.</p>

 <p><b>Conclusion:</b>The Power of Unity in Faith:
 When people join together in faith, great things happen. Needs are met, hope is restored, and love is shared. The early church in the Bible is a great example — they prayed, ate, and lived life together, and God blessed them richly.</p>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Comments</h2>
        {comments.length > 0 ? (
  comments.slice(0, 4).map((comment, index) => (
    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md my-4">
      <p className="text-gray-800">
        <b>{comment.user.username}</b>: {comment.body}
      </p>
    </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}

        <div className="mt-4">
          <h3 className="text-lg font-bold">Add a Comment</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <textarea
            placeholder="Write your comment here..."
            className="border border-gray-300 p-2 rounded-md w-full"
            rows={2}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white p-2 rounded-md mt-2"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export const Blog4 = () => {
    
interface Comment {
    id: number;
    body: string;
    postId: number;
    user: {
      id: number;
      username: string;
  }
  }
  const [comments, setComments] = useState<Comment[]>([]);
  
  
  const fetchComments = async (): Promise<Comment[]> => {
    const response = await fetch('https://dummyjson.com/comments');
    const data = await response.json();
    return data.comments;
  };

  useEffect(() => {
    fetchComments().then(setComments).catch(console.error);
  }, [fetchComments]);
  const handleAddComment = () => {
    const inputElements = document.getElementsByTagName('input');
    const textAreaElements = document.getElementsByTagName('textarea');
    if (inputElements.length > 0 && textAreaElements.length > 0) {
      const username = inputElements[0].value.trim();
      const userComment = textAreaElements[0].value.trim();
      
      if (username && userComment) {
        const newComment = {
          id: comments.length + 1,
          body: userComment,
          postId: 1,
          user: {
            id: comments.length + 1,
            username: username,
          },
        };
        setComments([newComment, ...comments]);
        inputElements[0].value = ''; // Clear input
        textAreaElements[0].value = ''; // Clear textarea
      

      } else {
        alert('Please enter both a name and a comment.');
      }
    }
  };
   
  return (
    <div className="blog-container">
      <Image 
        src="https://s3.amazonaws.com/uss-cache.salvationarmy.org/bd2b989a-7b26-409f-8bcc-5cd142486c34_hands_24985apc.jpg" 
        alt="prayer" 
        width={900} 
        height={400} 
        className="rounded-lg mb-6 mx-auto"
      />
      <h1>Prayer – Our Direct Line to God</h1>
      <p></p>
           <p>Prayer is not just a religious practice—it’s a lifeline, a personal connection to God that gives us access to strength, peace, and clarity. In a world full of confusion and constant noise, prayer offers a moment of stillness, where we can hear God’s voice and feel His presence.

When we pray, we aren’t just speaking into the air; we are connecting with the Creator of the universe. Whether we’re facing struggles or celebrating victories, prayer reminds us that we are never alone. It gives us power in weakness and hope in uncertainty.

Prayer also helps us discover our purpose. It realigns our hearts with God’s will and reveals the path He has set for us. In prayer, we find direction when we’re lost and courage when we’re afraid.

Instead of seeing prayer as a last resort, we should treat it as our first and strongest response. When prayer becomes a daily habit, it changes how we think, act, and live.</p>
     
      <p><b>Conclusion:</b> Prayer is a powerful gift—a direct line to God’s heart. It’s where we find power for today and purpose for tomorrow. Make it your daily connection, and you’ll never walk alone.</p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Comments</h2>
        {comments.length > 0 ? (
  comments.slice(0, 4).map((comment, index) => (
    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md my-4">
      <p className="text-gray-800">
        <b>{comment.user.username}</b>: {comment.body}
      </p>
    </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}

  <div className="mt-4">
          <h3 className="text-lg font-bold">Add a Comment</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <textarea
            placeholder="Write your comment here..."
            className="border border-gray-300 p-2 rounded-md w-full"
            rows={2}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white p-2 rounded-md mt-2"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export const Blog5 = () => {
    
interface Comment {
    id: number;
    body: string;
    postId: number;
    user: {
      id: number;
      username: string;
  }
  }
  
  
  const fetchComments = async (): Promise<Comment[]> => {
    const response = await fetch('https://dummyjson.com/comments');
    const data = await response.json();
    return data.comments;
  };
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchComments().then(setComments).catch(console.error);
  }, [fetchComments]);
  const handleAddComment = () => {
    const inputElements = document.getElementsByTagName('input');
    const textAreaElements = document.getElementsByTagName('textarea');
    if (inputElements.length > 0 && textAreaElements.length > 0) {
      const username = inputElements[0].value.trim();
      const userComment = textAreaElements[0].value.trim();
      
      if (username && userComment) {
        const newComment = {
          id: comments.length + 1,
          body: userComment,
          postId: 1,
          user: {
            id: comments.length + 1,
            username: username,
          },
        };
        setComments([newComment, ...comments]);
        inputElements[0].value = ''; // Clear input
        textAreaElements[0].value = ''; // Clear textarea
      
      } else {
        alert('Please enter both a name and a comment.');
      }
    }
  };
   
  return (
    <div className="blog-container">
      <Image 
        src="https://i0.wp.com/kimenink.com/wp-content/uploads/2019/02/5-Smooth-Stones-5-Inspiring-Words-kimenink.jpg?resize=1280%2C1280&ssl=1" 
        alt="the Power of Five Stones" 
        width={900} 
        height={400} 
        className="rounded-lg mb-6 mx-auto"
      />
      <h1>The Power of Five Stones</h1>
      <p><b>The Power of Five Stones: Faith, Trust, Praise, Obedience, and Courage</b>
<br/>Just like David defeated Goliath with five smooth stones, we too can face life’s giants using our own "five stones"—Faith, Trust, Praise, Obedience, and Courage. These are not just words; they are powerful weapons for every believer in their spiritual journey.

<br/><b>1. Faith – Believing Without Seeing</b>
Faith means believing in God even when we can’t see what He’s doing. It's like walking in the dark and knowing that God is holding your hand. Hebrews 11:1 tells us, “Faith is confidence in what we hope for and assurance about what we do not see.” When we have faith, we believe that God’s plan is always best, no matter the situation.

<br/><b>2. Trust – Resting in God’s Plan</b>
Trust goes hand-in-hand with faith. It means depending on God fully, even when life is hard or confusing. Trust is saying, "God, I don’t understand everything, but I know You do." Proverbs 3:5 encourages us, “Trust in the Lord with all your heart and lean not on your own understanding.”

<br/><b>3. Praise – Worshiping in Every Season</b>
Praise is powerful. It brings us closer to God and reminds us of His greatness. Whether we are happy or sad, praising God changes our hearts. Paul and Silas praised God in prison, and miracles happened! When we praise, we invite God into our situation.

<br/><b>4. Obedience – Doing What God Says</b>
Obedience is listening to God’s Word and doing what He tells us. Sometimes it’s not easy, but obedience brings blessing. Just like Abraham obeyed God and became the father of many nations, we too are called to follow God’s instructions, even when it’s hard.

<br/><b>5. Courage – Facing Giants Without Fear</b>
Courage doesn’t mean we’re not afraid—it means we choose to move forward anyway because we know God is with us. David showed courage when he stood before Goliath, saying, “The battle is the Lord’s.” With courage, we can face any challenge knowing that God fights for us.</p>
      
      <p><b>Conclusion:</b> These five stones—Faith, Trust, Praise, Obedience, and Courage—are gifts from God to help us overcome life’s battles. When we carry them in our hearts, we become stronger, braver, and closer to God. Just like David, we too can conquer our giants with the power of God and these five stones in our spiritual sling.</p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Comments</h2>
        {comments.length > 0 ? (
  comments.slice(0, 4).map((comment, index) => (
    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md my-4">
      <p className="text-gray-800">
        <b>{comment.user.username}</b>: {comment.body}
      </p>
    </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}

        <div className="mt-4">
          <h3 className="text-lg font-bold">Add a Comment</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <textarea
            placeholder="Write your comment here..."
            className="border border-gray-300 p-2 rounded-md w-full"
            rows={2}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white p-2 rounded-md mt-2"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export const Blog6 = () => {
  interface Comment {
    id: number;
    body: string;
    postId: number;
    user: {
      id: number;
      username: string;
    };
  }

  const fetchComments = async (): Promise<Comment[]> => {
    const response = await fetch('https://dummyjson.com/comments');
    const data = await response.json();
    return data.comments;
  };

  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchComments().then(setComments).catch(console.error);
  }, [fetchComments]);

  const handleAddComment = () => {
    const inputElements = document.getElementsByTagName('input');
    const textAreaElements = document.getElementsByTagName('textarea');
    if (inputElements.length > 0 && textAreaElements.length > 0) {
      const username = inputElements[0].value.trim();
      const userComment = textAreaElements[0].value.trim();

      if (username && userComment) {
        const newComment = {
          id: comments.length + 1,
          body: userComment,
          postId: 1,
          user: {
            id: comments.length + 1,
            username: username,
          },
        };
        setComments([newComment, ...comments]);
        inputElements[0].value = ''; // Clear input
        textAreaElements[0].value = ''; // Clear textarea
      } else {
        alert('Please enter both a name and a comment.');
      }
    }
  };

  return (
    <div className="blog-container">
      <Image
        src="https://americandecency.org/wp-content/uploads/2022/05/Standing-on-Truth.png"
        alt="Living and Standing on God's Truth"
        width={900}
        height={200}
        className="rounded-lg mb-6 mx-auto"
      />
      <h1>The Word – Living and Standing on God's Truth</h1>
      <p>In a world full of changing opinions and mixed messages, one thing remains unshaken — God’s Word. The Bible is not just an old book or a collection of stories. It is God’s living truth, given to guide us, correct us, and give us hope. When we choose to live and stand on God's Word, we build our lives on a foundation that never fails.

<br/><b>What Does It Mean to Live on God’s Word?</b>
Living on God’s Word means making it a part of our everyday life. It means reading the Bible not just for knowledge, but for direction. It shapes the way we speak, act, love others, and make decisions. As Jesus said in Matthew 4:4, “Man shall not live by bread alone, but by every word that comes from the mouth of God.”

<br/><b>Standing Firm on God’s Truth</b>
Standing on God's truth means we do not let the world’s lies or pressures pull us away from what God has said. Even when things around us are uncertain or people mock our faith, we stay firm because we know that God's Word is always true. Just like a house built on a rock, our lives stay steady when we stand on Scripture.

<br/><b>Why Is God's Word So Powerful?</b>
<br/><b>It brings light in darkness – </b>Psalm 119:105 says, “Your word is a lamp to my feet and a light to my path.”

<br/><b>It gives us wisdom – </b>God's Word teaches us how to live with peace and purpose.

<br/><b>It corrects and strengthens us – </b>It helps us grow in our faith and become more like Jesus.

<br/><b>It never changes – </b>While the world changes every day, God’s truth remains the same forever.

<br/><b>How Can We Live by the Word?</b>
<br/><b>Read it daily – </b>Make time to read and meditate on Scripture.

<br/><b>Apply it –</b> Don’t just hear the Word — do what it says.

<br/><b>Share it –</b> Tell others about the truth and love you find in God’s Word.

<br/><b>Trust it – </b>Believe what God says, even when life is hard.
      </p>
      <p>
        <b>Conclusion:</b> <b>God’s Word is our solid ground</b> in an uncertain world. When we live by it and stand on it, we are not shaken. It gives us strength, peace, and direction for every step. Let’s hold on to it, walk in it, and let it guide our hearts every day.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Comments</h2>
        {comments.length > 0 ? (
          comments.slice(0, 4).map((comment, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md my-4">
              <p className="text-gray-800">
                <b>{comment.user.username}</b>: {comment.body}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}

        <div className="mt-4">
          <h3 className="text-lg font-bold">Add a Comment</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <textarea
            placeholder="Write your comment here..."
            className="border border-gray-300 p-2 rounded-md w-full"
            rows={2}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white p-2 rounded-md mt-2"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};