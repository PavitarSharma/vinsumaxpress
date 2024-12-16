import { Link } from "react-router-dom";
import { ROUTES } from "@/lib/routes";
import { useEffect } from "react";

const PrivacyPolicy = () => {
   useEffect(() => {
      document.title = "Privacy ploicy | Vinsum Axpress";
    }, []);

  return (
    <section className="py-10">
      <div className="container">
        <div>
          <h1 className="sm:text-4xl text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-2 opacity-70">Last updated: May 03, 2024</p>
          <p className="my-4">
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>
          <p>
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>
        </div>

        <div className="py-8">
          <h2 className="sm:text-3xl text-2xl font-bold text-center">
            Interpretation and Definitions
          </h2>
          <div className="py-8 space-y-4">
            <h3 className="text-xl font-semibold">Interpretation</h3>
            <p>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>
          </div>

          <div className="py-8 space-y-4">
            <h3 className="text-xl font-semibold">Definitions</h3>
            <div>
              <p className="">For the purposes of this Privacy Policy:</p>
              <ul className="list-disc pl-8 my-4 space-y-4">
                <li>
                  <span className="font-semibold mr-1">Account</span>
                  <span>
                    means a unique account created for You to access our Service
                    or parts of our Service.
                  </span>
                </li>
                <li>
                  <span className="font-semibold mr-1">Affiliate</span>
                  <span>
                    means an entity that controls, is controlled by or is under
                    common control with a party, where {'"control"'} means
                    ownership of 50% or more of the shares, equity interest or
                    other securities entitled to vote for election of directors
                    or other managing authority.
                  </span>
                </li>
                <li>
                  <span className="font-semibold mr-1">Application</span>
                  <span>
                    refers to any Vinsum Axpress Apps/Website, the software
                    program provided by the Company.
                  </span>
                </li>

                <li>
                  <span className="font-semibold mr-1">Company</span>
                  <span>
                    (referred to as either {"the Company"}, {'"We"'}, {'"Us"'}{" "}
                    or {'"Our"'} in this Agreement) refers to Vinsum Axpress
                    India Pvt Ltd., 404 Electronic City, Udyog Vihar, Phase IV,
                    Sector 18, Gurugram, 122015.
                  </span>
                </li>
                <li>
                  <span className="font-semibold mr-1">Country</span>
                  <span>refers to: Haryana, India</span>
                </li>
                <li>
                  <span className="font-semibold mr-1">Device</span>
                  <span>
                    means any device that can access the Service such as a
                    computer, a cellphone or a digital tablet.
                  </span>
                </li>
                <li>
                  <span className="font-semibold mr-1">Personal Data</span>
                  <span>
                    is any information that relates to an identified or
                    identifiable individual.
                  </span>
                </li>
                <li>
                  <span className="font-semibold mr-1">Service</span>
                  <span>refers to the Application.</span>
                </li>
                <li>
                  <span className="font-semibold mr-1">Service Provider</span>
                  <span>
                    means any natural or legal person who processes the data on
                    behalf of the Company. It refers to third-party companies or
                    individuals employed by the Company to facilitate the
                    Service, to provide the Service on behalf of the Company, to
                    perform services related to the Service or to assist the
                    Company in analyzing how the Service is used.
                  </span>
                </li>
                <li>
                  <span className="font-semibold mr-1">Usage Data</span>
                  <span>
                    refers to data collected automatically, either generated by
                    the use of the Service or from the Service infrastructure
                    itself (for example, the duration of a page visit).
                  </span>
                </li>
                <li>
                  <span className="font-semibold mr-1">You</span>
                  <span>
                    means the individual accessing or using the Service, or the
                    company, or other legal entity on behalf of which such
                    individual is accessing or using the Service, as applicable.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8">
          <h2 className="sm:text-3xl text-2xl font-bold text-center">
            Collecting and Using Your Personal Data
          </h2>
          <div className="py-8 space-y-4">
            <h3 className="text-xl font-semibold">
              Permissions Requested/Required for Android Apps
            </h3>
            <ul className="my-4 space-y-4 list-decimal pl-8">
              <div className="space-y-2">
                <li className="font-semibold">
                  ACCESS_FINE_LOCATION & ACCESS_COARSE_LOCATION
                </li>
                <p>
                  We are fetching the user&#39;s fine location from the device
                  and using it to determine if the user is at a certain
                  location. Users can mark attendance from this app if he/she is
                  at a certain location, hence the permissions. We&#39;re not
                  storing the fetched user&#39;s location.
                </p>
              </div>
              <div className="space-y-2">
                <li className="font-semibold">CALL_PHONE</li>
                <p>
                  Users can call the support team if they have any queries. The
                  call is made from ACTION_CALL intent provided by Android APIs.
                  We&#39;re not storing any data from this intent.
                </p>
              </div>
              <div className="space-y-2">
                <li className="font-semibold">CAMERA</li>
                <p>
                  The camera is required for clicking the user&#39;s photo and
                  the face recognition feature. We&#39;re storing user&#39;s
                  images for their profile.
                </p>
              </div>
              <div className="space-y-2">
                <li className="font-semibold">INTERNET</li>
                <p>
                  The Internet permission is necessary for the App to connect to
                  online services and provide you with the intended
                  functionalities.
                </p>
              </div>
              <div className="space-y-2">
                <li className="font-semibold">
                  READ_EXTERNAL_STORAGE & READ_MEDIA_IMAGES & READ_MEDIA_VIDEO &
                  READ_MEDIA_AUDIO
                </li>
                <p>
                  These permissions are used to access media files on your
                  device for specific App features
                </p>
              </div>
            </ul>
            <p>
              These permission are requested (except INTERNET) on runtime of the
              app. You can deny these permission when permission dialog is shown
              or you can deny them by going to app&#39;s settings.
            </p>
          </div>

          <div className="py-4 space-y-4">
            <h3 className="text-xl font-semibold">Types of Data Collected</h3>

            <div className="space-y-8">
              <div>
                <h4 className="font-semibold">Personal Data</h4>
                <p className="my-2">
                  While using Our Service, We may ask You to provide Us with
                  certain personally identifiable information that can be used
                  to contact or identify You. Personally identifiable
                  information may include, but is not limited to:
                </p>
                <ul className="pl-8 space-y-4 my-4 list-disc">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Usage Data</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Usage Data</h4>
                <p className="my-2">
                  Usage Data is collected automatically when using the Service.
                </p>
                <p className="my-2">
                  Usage Data may include information such as Your Device&#39;s
                  Internet Protocol address (e.g. IP address), browser type,
                  browser version, the pages of our Service that You visit, the
                  time and date of Your visit, the time spent on those pages,
                  unique device identifiers and other diagnostic data.
                </p>
                <p className="my-2">
                  When You access the Service by or through a mobile device, We
                  may collect certain information automatically, including, but
                  not limited to, the type of mobile device You use, Your mobile
                  device unique ID, the IP address of Your mobile device, Your
                  mobile operating system, the type of mobile Internet browser
                  You use, unique device identifiers and other diagnostic data.
                </p>
                <p className="my-2">
                  We may also collect information that Your browser sends
                  whenever You visit our Service or when You access the Service
                  by or through a mobile device.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Information Collected while Using the Application
                </h4>
                <p className="my-2">
                  While using Our Application, in order to provide features of
                  Our Application, We may collect, with Your prior permission:
                </p>
                <ul className="pl-8 space-y-4 my-4 list-disc">
                  <li>Information regarding your location</li>
                  <li>
                    Pictures and other information from your Device&#39;s camera
                    and photo library
                  </li>
                </ul>
                <p className="my-2">
                  We use this information to provide features of Our Service, to
                  improve and customize Our Service. The information may be
                  uploaded to the Company&#39;s servers and/or a Service
                  Provider&#39;s server or it may be simply stored on Your
                  device.
                </p>
                <p className="my-2">
                  You can enable or disable access to this information at any
                  time, through Your Device settings.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Use of Your Personal Data</h4>
                <p className="my-2">
                  The Company may use Personal Data for the following purposes:
                </p>
                <ul className="pl-8 space-y-4 my-4 list-disc">
                  <li>
                    <span className="font-semibold mr-1">
                      To provide and maintain our Service,
                    </span>
                    <span>including to monitor the usage of our Service.</span>
                  </li>
                  <li>
                    <span className="font-semibold mr-1">
                      To manage Your Account:
                    </span>
                    <span>
                      to manage Your registration as a user of the Service. The
                      Personal Data You provide can give You access to different
                      functionalities of the Service that are available to You
                      as a registered user.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold mr-1">
                      For the performance of a contract:
                    </span>
                    <span>
                      the development, compliance and undertaking of the
                      purchase contract for the products, items or services You
                      have purchased or of any other contract with Us through
                      the Service.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold mr-1">To contact You:</span>
                    <span>
                      To contact You by email, telephone calls, SMS, or other
                      equivalent forms of electronic communication, such as a
                      mobile application&#39;s push notifications regarding
                      updates or informative communications related to the
                      functionalities, products or contracted services,
                      including the security updates, when necessary or
                      reasonable for their implementation.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold mr-1">To provide You</span>
                    <span>
                      with news, special offers and general information about
                      other goods, services and events which we offer that are
                      similar to those that you have already purchased or
                      enquired about unless You have opted not to receive such
                      information.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold mr-1">
                      To manage Your requests:
                    </span>
                    <span>To attend and manage Your requests to Us.</span>
                  </li>
                  <li>
                    <span className="font-semibold mr-1">
                      For business transfers:
                    </span>
                    <span>
                      We may use Your information to evaluate or conduct a
                      merger, divestiture, restructuring, reorganization,
                      dissolution, or other sale or transfer of some or all of
                      Our assets, whether as a going concern or as part of
                      bankruptcy, liquidation, or similar proceeding, in which
                      Personal Data held by Us about our Service users is among
                      the assets transferred.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold mr-1">
                      For other purposes:
                    </span>
                    <span>
                      We may use Your information for other purposes, such as
                      data analysis, identifying usage trends, determining the
                      effectiveness of our promotional campaigns and to evaluate
                      and improve our Service, products, services, marketing and
                      your experience.
                    </span>
                  </li>
                </ul>

                <p className="my-2 mt-6">
                  We may share Your personal information in the following
                  situations:
                </p>
                <ul className="pl-8 space-y-4 my-4 list-disc">
                  <li>
                    <span className="font-semibold mr-1">
                      With Service Providers:
                    </span>
                    <span>
                      We may share Your personal information with Service
                      Providers to monitor and analyze the use of our Service,
                      to contact You.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold mr-1">
                      For business transfers:
                    </span>
                    <span>
                      We may share or transfer Your personal information in
                      connection with, or during negotiations of, any merger,
                      sale of Company assets, financing, or acquisition of all
                      or a portion of Our business to another company.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold mr-1">With Affiliates:</span>
                    <span>
                      We may share Your information with Our affiliates, in
                      which case we will require those affiliates to honor this
                      Privacy Policy. Affiliates include Our parent company and
                      any other subsidiaries, joint venture partners or other
                      companies that We control or that are under common control
                      with Us.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold mr-1">
                      With business partners:
                    </span>
                    <span>
                      We may share Your information with Our business partners
                      to offer You certain products, services or promotions.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold mr-1">
                      With other users:
                    </span>
                    <span>
                      when You share personal information or otherwise interact
                      in the public areas with other users, such information may
                      be viewed by all users and may be publicly distributed
                      outside.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold mr-1">
                      With Your consent:
                    </span>
                    <span>
                      We may disclose Your personal information for any other
                      purpose with Your consent.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">
                  Retention of Your Personal Data
                </h4>
                <p className="my-2">
                  The Company will retain Your Personal Data only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  We will retain and use Your Personal Data to the extent
                  necessary to comply with our legal obligations (for example,
                  if we are required to retain your data to comply with
                  applicable laws), resolve disputes, and enforce our legal
                  agreements and policies.
                </p>
                <p className="my-2 mt-4">
                  The Company will also retain Usage Data for internal analysis
                  purposes. Usage Data is generally retained for a shorter
                  period of time, except when this data is used to strengthen
                  the security or to improve the functionality of Our Service,
                  or We are legally obligated to retain this data for longer
                  time periods.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Transfer of Your Personal Data
                </h4>
                <p className="my-2">
                  Your information, including Personal Data, is processed at the
                  Company&#39;s operating offices and in any other places where
                  the parties involved in the processing are located. It means
                  that this information may be transferred to â€” and maintained
                  on â€” computers located outside of Your state, province,
                  country or other governmental jurisdiction where the data
                  protection laws may differ than those from Your jurisdiction.
                </p>
                <p className="my-2 mt-4">
                  Your consent to this Privacy Policy followed by Your
                  submission of such information represents Your agreement to
                  that transfer.
                </p>
                <p className="my-2 mt-4">
                  The Company will take all steps reasonably necessary to ensure
                  that Your data is treated securely and in accordance with this
                  Privacy Policy and no transfer of Your Personal Data will take
                  place to an organization or a country unless there are
                  adequate controls in place including the security of Your data
                  and other personal information.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Delete Your Personal Data</h4>
                <p className="my-2">
                  You have the right to delete or request that We assist in
                  deleting the Personal Data that We have collected about You.
                </p>
                <p className="my-2 mt-4">
                  Our Service may give You the ability to delete certain
                  information about You from within the Service.
                </p>
                <p className="my-2 mt-4">
                  You may contact Us to request access to, correct, or delete
                  any personal information that You have provided to Us. If you
                  wish to delete the information linked and/or related to your
                  account on Vinsum (this includes any information acquired by
                  your consent from third party login providers such as Gmail,
                  LinkedIn, etc.), please email us at info@vinsumaxpress.com.
                  Please write {'"Delete User Account"'} in the Subject. The
                  sender email must correspond to the same account that you want
                  to get deleted. Your data will be completely destroyed within
                  72 hours or 3 business days. You will be notified of the same.
                </p>
                <p className="my-2 mt-4">
                  Please note, however, that We may need to retain certain
                  information when we have a legal obligation or lawful basis to
                  do so.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Disclosure of Your Personal Data
                </h4>

                <div className="my-4">
                  <p className="font-medium">Business Transactions</p>
                  <p className="mt-4">
                    If the Company is involved in a merger, acquisition or asset
                    sale, Your Personal Data may be transferred. We will provide
                    notice before Your Personal Data is transferred and becomes
                    subject to a different Privacy Policy.
                  </p>
                </div>

                <div className="my-4">
                  <p className="font-medium">Law enforcement</p>
                  <p className="mt-4">
                    Under certain circumstances, the Company may be required to
                    disclose Your Personal Data if required to do so by law or
                    in response to valid requests by public authorities (e.g. a
                    court or a government agency).
                  </p>
                </div>

                <div className="my-4">
                  <p className="font-medium">Other legal requirements</p>
                  <p className="mt-4">
                    The Company may disclose Your Personal Data in the good
                    faith belief that such action is necessary to:
                  </p>

                  <ul className="list-disc pl-8 space-y-4 my-4">
                    <li>Comply with a legal obligation</li>
                    <li>
                      Protect and defend the rights or property of the Company
                    </li>
                    <li>
                      Prevent or investigate possible wrongdoing in connection
                      with the Service
                    </li>
                    <li>
                      Protect the personal safety of Users of the Service or the
                      public
                    </li>
                    <li>Protect against legal liability</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold">
                  Security of Your Personal Data
                </h4>
                <p className="my-4">
                  The security of Your Personal Data is important to Us, but
                  remember that no method of transmission over the Internet, or
                  method of electronic storage is 100% secure. While We strive
                  to use commercially acceptable means to protect Your Personal
                  Data, We cannot guarantee its absolute security. We fully
                  comply with all Indian Laws applicable. We have always
                  cooperated with all law enforcement inquires. We may disclose
                  all or part of your personal details in response to a lawful
                  request from the law enforcement authorities or in a case of
                  bonafide requirement to prevent an imminent breach of the law.
                </p>
              </div>
            </div>
          </div>

          <div className="py-4 space-y-4">
            <h3 className="text-xl font-semibold">Types of Data Collected</h3>
            <p className="my-4">
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13. If You are a parent or guardian and You are
              aware that Your child has provided Us with Personal Data, please
              contact Us. If We become aware that We have collected Personal
              Data from anyone under the age of 13 without verification of
              parental consent, We take steps to remove that information from
              Our servers.
            </p>
            <p className="my-4">
              If We need to rely on consent as a legal basis for processing Your
              information and Your country requires consent from a parent, We
              may require Your parent&#39;s consent before We collect and use
              that information.
            </p>
          </div>

          <div className="py-4 space-y-4">
            <h3 className="text-xl font-semibold">Links to Other Websites</h3>
            <p className="my-4">
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party&#39;s site. We strongly advise You to
              review the Privacy Policy of every site You visit.
            </p>
            <p className="my-4">
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </p>
          </div>

          <div className="py-4 space-y-4">
            <h3 className="text-xl font-semibold">
              Changes to this Privacy Policy
            </h3>
            <p className="my-4">
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="my-4">
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              {'"Last updated"'} date at the top of this Privacy Policy.
            </p>
            <p className="my-4">
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </div>

          <div className="py-4 space-y-4">
            <h3 className="text-xl font-semibold">Your Consent</h3>
            <p className="my-4">
              By using this app/website, you consent to the terms of our online
              Privacy Policy and to Vinsum Axpress India Pvt Ltd.&#39;s
              processing of Personal Information for the purposes given above as
              well as those explained where â€Vinsum Axpress India Pvt Ltdâ€™
              collects Personal Information on the Website.
            </p>
            <p className="my-4">
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              {'"Last updated"'} date at the top of this Privacy Policy.
            </p>
            <p className="my-4">
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </div>

          <div className="py-4 space-y-4">
            <h3 className="text-xl font-semibold">Automated Decisions</h3>
            <p className="my-4">
              We neither use automated decision-making nor your Personal Data to
              automatically assess aspects of your personality (automated
              profiling).
            </p>
          </div>

          <div className="py-4 space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="my-4">
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>
            <ul className="pl-8 list-disc space-y-4 my-4">
              <li>
                By email:{" "}
                <a
                  href="mailto:info@vinsumaxpress.com"
                  className="text-blue-600"
                >
                  info@vinsumaxpress.com
                </a>
              </li>
              <li>
                By visiting this page on our website:
                <Link to={ROUTES.CONTACT} className="text-blue-600 ml-1">
                  {`${window.location.origin}${ROUTES.CONTACT}`}
                </Link>
              </li>
              <li>
                Address: Vinsum Axpress India Pvt Ltd. --- 404 Electronic City,
                Udyog Vihar, Phase IV, Sector 18, Gurugram, State of Haryana
                (India), 122015
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
