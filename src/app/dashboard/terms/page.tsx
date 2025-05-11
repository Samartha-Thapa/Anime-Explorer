import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
            <div className="min-h-screen flex flex-col relative">
    <div className="container mx-auto px-4 py-12">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="sakura-petals"></div>
              <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-600/20 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl animate-pulse animation-delay-1000"></div>
            </div>
      <div className="max-w-4xl mx-auto">
        {/* Replace the title section with this more anime-themed version: */}
        <div className="text-center mb-12 relative">
          <div className="absolute -top-10 left-1/4 text-4xl animate-pulse opacity-20">🔒</div>
          <div className="absolute top-0 right-1/4 text-4xl animate-pulse opacity-20 animation-delay-700">✨</div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy <span className="anime-title">Policy</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-white/90">Last updated: May 11, 2025</p>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Your Privacy Matters</h2>
            <p className="mb-4">
              At AnimeVerse, we respect your privacy and are committed to protecting your personal data. This Privacy
              Policy explains how we collect, use, and safeguard your information when you use our website and services.
            </p>
            <p>
              We&apos;ve designed this policy to be clear and straightforward, just like the best anime plots (but with fewer
              plot twists and surprise villains).
            </p>
            {/* Add these anime-themed quotes throughout the privacy sections: */}
            <div className="relative my-8">
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 text-2xl">🔒</div>
              <div className="pl-6 border-l-2 border-purple-400 italic text-white/90">
                &quot;Just as a hero protects their friends, we&apos;re committed to protecting your data with the same
                dedication.&quot;
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {[
            {
              title: "1. Information We Collect",
              content: `We collect several types of information for various purposes to provide and improve our Service to you:

Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you, including:
• Email address
• First name and last name
• Username
• Profile picture
• Usage data

Usage Data: We may also collect information on how the Service is accessed and used, including:
• Your computer's IP address
• Browser type and version
• Pages of our Service that you visit
• Time and date of your visit
• Time spent on those pages
• Other diagnostic data`,
            },
            {
              title: "2. How We Use Your Information",
              content: `We use the collected data for various purposes:

• To provide and maintain our Service
• To notify you about changes to our Service
• To allow you to participate in interactive features of our Service
• To provide customer support
• To gather analysis or valuable information so that we can improve our Service
• To monitor the usage of our Service
• To detect, prevent and address technical issues
• To provide you with news, special offers and general information about other goods, services and events which we offer`,
            },
            {
              title: "3. Data Security",
              content: `The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.

We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal data, including:
• All sensitive information is encrypted using secure socket layer technology (SSL)
• Regular malware scanning
• Vulnerability assessments and penetration testing
• Regular security updates and patches`,
            },
          ].map((section, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                <div className="text-white/90 whitespace-pre-line">{section.content}</div>
              </CardContent>
            </Card>
          ))}

          {/* Add this after the 3rd section: */}
          <div className="relative my-8">
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 text-2xl">🛡️</div>
            <div className="pl-6 border-l-2 border-pink-400 italic text-white/90">
              &quot;Like the magical barriers that protect anime kingdoms, our security measures are designed to keep your
              information safe.&quot;
            </div>
          </div>

          {[
            {
              title: "4. Your Data Protection Rights",
              content: `Under certain circumstances, you have rights under data protection laws in relation to your personal data:

• Request access to your personal data
• Request correction of your personal data
• Request erasure of your personal data
• Object to processing of your personal data
• Request restriction of processing your personal data
• Request transfer of your personal data
• Right to withdraw consent

If you wish to exercise any of these rights, please contact us at privacy@animeverse.com.`,
            },
            {
              title: "5. Cookies",
              content: `We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.

Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device.

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.`,
            },
            {
              title: "6. Service Providers",
              content: `We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is used.

These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.

Our Service Providers include:
• Hosting and infrastructure providers
• Analytics providers
• Payment processors
• Email service providers`,
            },
          ].map((section, index) => (
            <Card key={index + 3} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                <div className="text-white/90 whitespace-pre-line">{section.content}</div>
              </CardContent>
            </Card>
          ))}

          {/* Add this after the 6th section: */}
          <div className="relative my-8">
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 text-2xl">📚</div>
            <div className="pl-6 border-l-2 border-blue-400 italic text-white/90">
              &quot;Knowledge is power. We believe in transparency about how we handle your information, just as the best
              anime reveals its mysteries at the right time.&quot;
            </div>
          </div>

          {[
            {
              title: "7. Children's Privacy",
              content: `Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us.

If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.`,
            },
            {
              title: "8. Changes to This Privacy Policy",
              content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.`,
            },
          ].map((section, index) => (
            <Card key={index + 6} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                <div className="text-white/90 whitespace-pre-line">{section.content}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white mt-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-purple-300">•</span>
                <span>By email: privacy@animeverse.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-300">•</span>
                <span>By visiting the contact page on our website</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  )
}
