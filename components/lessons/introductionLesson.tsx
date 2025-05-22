

const IntroductionLesson = () => {
  return (
    <section className='flex justify-center min-h-screen w-full'>
      <div className='w-full md:w-11/12 lg:w-9/12 p-4 lg:px-6 lg:py-14'>
          {/* Video and title */}
          <div className='space-y-6'>
            <h1 className='text-3xl sm:text-6xl font-black'>Introduction video</h1>
            <div className='border shadow-primary bg-bg-green rounded-large aspect-video'></div>
          </div>
          {/* Content */}
          <section className="flex flex-col items-center py-10 lg:px-10 lg:py-20 gap-16">
            {/* Paragraph */}
            <div className="space-y-4">
              <h2 className="font-bold text-2xl">The Importance of User Testing in Product Development</h2>
              <p>User testing is a crucial phase in the product development lifecycle, offering invaluable insights into how real users interact with a product. By observing users as they navigate through a website, application, or any other product, developers and designers can identify usability issues, gather qualitative feedback, and understand user behavior.</p>
              <p>This process not only helps in refining the user interface and enhancing user experience but also ensures that the final product aligns with user needs and expectations. Effective user testing can lead to higher user satisfaction, increased engagement, and ultimately, a more successful product in the market. Incorporating user feedback early and often can save time and resources by addressing potential problems before they become costly to fix</p>
            </div>
            {/* Illustration */}
            <div className='border shadow-primary bg-bg-red rounded-large aspect-video w-full'></div>
            {/* Paragraph */}
            <div className="space-y-4">
              <h2 className="font-bold text-2xl">Effectively Handling User Feedback for Continuous Improvement</h2>
              <p>Handling user feedback effectively is essential for any organization aiming to improve its products or services. The first step is to actively collect feedback through various channels such as surveys, social media, and direct communication. Once gathered, it's crucial to categorize and analyze the feedback to identify common themes and areas for improvement. Prioritizing feedback based on its impact and feasibility allows organizations to address the most critical issues first. </p>
              <p>Transparent communication with users about the changes being implemented as a result of their feedback fosters trust and shows that their input is valued. Additionally, creating a feedback loop where users are informed about the actions taken can enhance user satisfaction and loyalty. By systematically handling user feedback, organizations can drive continuous improvement and deliver products that truly meet user needs.</p>
            </div>
          </section>
      </div>
    </section>
  )
}

export default IntroductionLesson;