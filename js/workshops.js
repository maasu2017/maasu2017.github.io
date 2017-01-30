$(document).ready(function() {
  $("tr").click(function() {
    // Creates jQuery variable 'event' that contains a string of whatever value
    // is in the id attribute of the selected row

    // tbh im not entirely sure this needs to be a jquery variable
    var $event = $(this).attr('id');

    // there's probably better logic to this i guess
    $(".workshop-info").fadeOut(function() {
      var blurb = "";

      // idk i thought a switch statement would be a good idea
      switch ($event) {
        case "wkey":
          blurb = "A spoken word performance from one of MAASU keynote speakers, Franny Choi. Franny Choi is a writer, performer, and teaching artist. She is the author of Floating, Brilliant, Gone, and the forthcoming chapbook Death by Sex Machine. In the past, she has been a finalist for many national poetry slams and her work has been featured on Huffington Post and Poetry Magazine.";
          break;

        case "w1":
          blurb = "Frances Kai-Hwa Wang is a writer, speaker, editor, teacher, activist, and currently works for NBC News Asian America. Her workshop will be focused on connections between APIA media stereotypes, identity issues, and what contemporary APIA creatives are doing to clap back. Challenge yourself to become a critical reader, savvy media consumer, and activist writer/content creator while celebrating hot APIA stereotype busters.";
          break;

        case "w2":
          blurb = "An Intercultural Specialist at Ohio State University will run a workshop on political correctness and microaggressions.  Though well intended, statements such as “I’m colorblind” often widen the diversity gap, causing irreplaceable harm personally and professionally. This workshop, heavily inspired by Dr. Maura Cullen’s “35 Dumb Things Well-Intended People Say”, invites participants to define and identify bias, stereotypes, and microaggressions as they relate to communication, recognize statements that align positive intent and impact, and to actively accept and provide feedback as needed on microaggressions and discuss the need to address them within society. ";
          break;

        case "w3":
          blurb = "An Intercultural Specialist at Ohio State University will run a workshop on history and intersectionality in media. This workshop will dive into the historical understanding of why activism in the APIA community matters open dialogues on current issues that our community faces – the Black Lives Matter movement, and the DACA/DREAM Act/DAPA. What are the current issues that college students face? Are there resources in the community or at your institution that support underrepresented and underserved communities?";
          break;

        case "w4":
          blurb = "Roland Hwang, a UM Adjunct Professor in A/PIA Studies, Attorney and Commissioner of the MAPAAC, and a dedicated member of the APA community, will host a workshop detailing the aftermath of Asian American grievances, including the death of Vincent Chin, espionage charges against scientist Wen Ho Lee, post- 9/11 violence, the police shooting of Fong Lee, the harassment that led to the suicide of PFC Danny Chen, the indictment of ex-NYC cop Peter Liang, and indictments against hydrologist Sherry Chen and Temple University physics professor Xiaoxing Xi.";
          break;

        case "w5":
          blurb = "This workshop is led by Nicole Brindejonc, the founder of the Pacific Islander Student Association at the University of Michigan. It will discuss the ways that acceptance and respect of racial identities (or really any identity for that matter) are critical components in the path to unifying A/PIA and non-A/PIA groups on college campuses throughout the Midwest and beyond. ";
          break;

        case "w6":
          blurb = "This workshop will analyze Students4Justice, an organization created around explicitly racist and xenophobic acts on campus, and its organizing efforts. This will be a time for us to be able to focus on what organizing can look like on our own campuses, and how we can create a coalition where we are uncompromising in our organizing and strategically use the language of our university administrations to push for accountability.";
          break;

        case "w7":
          blurb = "This workshop will create a discussion regarding the roots, real risks, and repercussions of eating disturbances and body issues, specifically in the APIA community. We will focus on how specific APIA cultural values (e.g., filial piety, family obligation) play into body image issues and eating disturbances in the APIA community as well as intercultural communities. Given this, we would like to provide the audience with coping mechanisms and ways to navigate body image in an increasingly appearance focused society (e.g., promote self-love and care).";
          break;

        case "w8":
          blurb = "An Associate Professor at Michigan State University, Naoko Wake has a passionate interest in the history of gender, medicine, and sexuality in the twentieth century United States and the Pacific Rim. This workshop will be a discussion-type workshop that will explore the important reasons why the APIA and LGTBQA+ communities must continue to build strong alliances in the post 2016-election world. Moreover, these communities have experienced unique sets of social perceptions as well as unpacking bias aimed towards these communities. Ultimately, this workshop will equip attendees with specific knowledge about the intersectionality between these different minority communities.";
          break;

        case "w9":
          blurb = "This workshop will focus on the intersection of academics with activism. Being on campus, Asian American student activists occupy the same (or similar) space as Asian American scholarship, but do the two meet? Depending on the local circumstances, activism and scholarship can either march together or not. It will explore ways that Asian American students can engage with Asian American scholars to create compelling ways to demonstrate the significance of Asian America on the matters that matter to many students-of-color today.";
          break;

        case "w10":
          blurb = "The vision for this workshop is to educate and facilitate conversations about mental health concerns specific to the Asian/Pacific Islander American community. The workshop will include a presentation along with interactive activities and discussion surrounding the intersectionality of mental health and the A/PIA Community. At the end of the workshop we would like participants to leave with a better understanding of mental health and seeking professional health, cultural factors specific to the APIA community in relation to mental health, and healthy ways to cope with the unique stressors that the APIA community experiences.";
          break;

        case "w11":
          blurb = "Led by a Korean Adoptee, this workshop will explore the topic of inclusivity and acceptance in APIA communities by examining how we assess other APIAs. Being &ldquo;Asian&rdquo; is typically thought of in terms of ethnicity, upbringing, and language skills which generally, adoptees lack and often considered &ldquo;too white&rdquo; for APIAs to relate to. Yet by society&rsquo;s standards, Korean Adoptees are typically treated as any other APIA would be by non APIAs.";
          break;

        case "w12":
          blurb = "The goal of this workshop is to provide a brief overview of Palestine and A/PIA solidarity through an interactive presentation and Q&A session. This workshop will take an in-depth look of the Association for Asian American Studies (AAAS) and it's activism in 2013 with its resolution for supporting an academic boycott of Israel. You will gain a further understanding of the history and the need for Palestine and A/PIA to be in conversation with one another.";
          break;

        case "w13":
          blurb = "An advisor and lecturer for the undergraduate minor in the School of Social Work at the University of Michigan, Joseph aims to facilitate conversation about “Catching Up with Martin,” a chapter in the book, The Next American Revolution: Sustainable Activism in the 21st Century by Grace Lee Boggs and Scott Kurashige (2011). Who was Grace Lee Boggs and what relevance does her work have for Asian American activists today? Which works of Martin Luther King does Grace Lee Boggs examine and what are her takeaways? Are these reflections, often rooted in the social conditions of the 1960s, still relevant – and if so, how?";
          break;

        case "w14":
          blurb = "This workshop will provide a presentation and a space to learn and dialogue about the complexities of Filipinx historical condition. A history marked by multiple colonizations has led to a complicated Filipinx identity when it comes to language, spirituality, place within the API acronym (are Filipinos Asian, Pacific Islander, or Latino?), and more. We’ll start with a discussion of the Fil-Am pensionado program in the Midwest, a program in which government sponsored Filipinx students to study in the U.S.  Next, we’ll transition to a discussion about what it means to work towards decolonization and why this is important. With this new lens through which to view one’s place in the world, we will end with a discussion of what reflections and actions this knowledge inspires. Throughout, we’ll engage questions such as: What does it mean to decolonize? What are our responsibilities as present-day APIA students? What are the opportunities and challenges?";
          break;

        case "w15":
          blurb = "A recent graduate from the University of Michigan who is currently studying at John Hopkins University, Swati's workshop aims to provide a dialogue on the South Asian experiences with gender and sexuality. It will explore the influence that our colonial history and diasporic experience has on our experience today. This workshop aims to equip attendees with knowledge and resources to engage in thoughtful conversation and action.";
          break;

        case "w16":
          blurb = "";
          break;

        case "w17":
          blurb = "This workshop will facilitate a discussion of the perpetual foreigner syndrome and tackling the question, 'Where are you really from?' if, as Asian Americans, we claim to be American, what qualities and characteristics define us as American? Often times Asian Americans can easily list off qualities that make them Asian, but are left with only the fact that they were born in America when defining qualities that make them American. This workshop will explore what it means to be American, largely focused on second generation Asian Americans and onwards.";
          break;

        case "w18":
          blurb = "This workshop aims to cover the diverse experiences of growing up Asian American. Everyday conversations around dating, sleepovers, mealtimes even can vary greatly in immigrant households, especially when generations come of age in different environments. Through storytelling, “Our Stories, Our Voices” seeks to understand how youth growing up in Asian American households relate to their cultural identity and parents.";
          break;

        case "w19":
          blurb = "Presented by the Detroit Asian Youth Project - How do we build a safe, intentional space for all on the margins?  In this interactive workshop, we will share the history and our narratives of Detroit’s Chinatown.  We will then focus on intentional trans-cultural coalition building to counteract gentrification in the Chinatown neighborhood and beyond.  Come and learn/share ways to outline effective strategies for resistance-building.";
          break;

        case "w20":
          blurb = "This workshop will focus on sharing multiracial and mixed-heritage Asian/Pacific Islander experiences set in the context current population statistics, history and lived experiences. Regardless of how they racially identify (multiracial or not), participants will be able to 1) gain an understanding of the historical and political impacts on multiracial experiences 2) consider their own socialization around race through a monoracial and multiracial lens 3) reflect on how monoracially conceived spaces impact their multiracial peers.";
          break;

        case "w21":
          blurb = "A recent graduate of University of Michigan and active participant in the APIA community on campus, Rosalie will present a workshop to create a impact in seemingly irrelevant career fields. If you’ve ever wrestled with bridging the gap between your career and the all-too-important task of reversing oppression, join us in a dialogue as we explore ways to bridge the gap between our career and the all-too-important task of reversing oppression. This workshop will be more anecdotal in nature, with some personal brainstorming time so that you can begin thinking of practical steps to take as you start your career. The hope is that you walk away knowing that being a part of a justice movement isn’t mutually exclusive from the career you may have – and that you’ll know how to take practical steps to get involved once you graduate.";
          break;

        case "w22":
          blurb = "Director of the Multicultural Center for Academic Excellence at the University of Minnesota, Aurelio Curbelo will lead a workshop that aims to disseminate information on the type of qualities needed in AIPA student leaders to become competitive at a global level. The workshop will present some of the most successful programs currently available in Land Grant Institutions to prepare AIPA Global leaders. It will also discuss effective strategies implemented by Land Grant institutions to break the barriers of inequality in STEM areas.";
          break;

        case "w23":
          blurb = "As the director of Asian American and Asian Resource and Cultural Center at Purdue University, Xavier Hernandez will lead a workshop on improv theater exercises that showcase prominent issues facing both student organizations and individual students. Participants will be asked to engage in improvised scenarios that reflect challenges faced by Asian/American student leaders on campus. Attendees will be encouraged to share their personal experiences in a safe space and discuss useful strategies for handling situations of interpersonal conflict, leadership development, and community/public relations.";
          break;

        case "w24":
          blurb = "As the director of Asian American and Asian Resource and Cultural Center at Purdue University, Xavier Hernandez will lead a workshop that will examine the multiple ways that Asian/American student organizations create an active forum for self-discovery and continue to act as such long after graduation. He will chronicle his own path from as an active participant in Filipino American student organizations to his professional career in higher education. This full circle journey will ultimately illustrate how the Asian/American student experience provides invaluable opportunities for all attendees, regardless of their individual interests and aspirations, to thrive within their families, campuses, communities, and professional fields.";
          break;

        case "w25":
          blurb = "A workshop on art activism that will note the power of representation in literature. It is imperative that we provide Asians with an opportunity to see themselves represented in literature, not only to bolster student engagement, but because students deserve this. Today, you will learn about 30 powerful books to transform your identity and give you a more reflective insight about the Asian experience in the U.S.. Several fiction and non-fiction titles will be highlighted that can be used across content areas.";
          break;

        case "w26":
          blurb = "";
          break;

        case "w27":
          blurb = "Attendees will engage in a dialogue-like workshop that will focus on sharing their perspectives on what kinds of peer and campus support has been effective in helping their organizations develop and succeed. This workshop will draw from participants as well as the facilitator to study practices best used to support APIA student organizations. Possible topics covered include: leadership retreats, workshops, team-building, peer support networks.";
          break;

        case "w28":
          blurb = "";
          break;

        case "w29":
          blurb = "";
          break;

        case "w30":
          blurb = "Our workshop aims to discuss the role Asian Americans play in hip hop culture. We hope to teach about the historical context of hip hop and open up the discussion on the role of Asian Americans in hip hop culture and the social issues that come up at the intersection of these identities. Other important key concepts to discuss are authenticity and commodification. What does it mean to be considered “authentic” hip hop and why is it difficult for Asian Americans to fit that mold? By the end of the workshop, we hope our attendees walk out more inspired to pursue their passions regardless of race or other identities, support other artists in their communities who are doing so, and be able to confidently say that hip hop belongs to everyone.";
          break;

        case "w31":
          blurb = "This workshop is led by Nicole Brindejonc, the founder of the Pacific Islander Student Association at the University of Michigan. It will discuss the ways that acceptance and respect of racial identities (or really any identity for that matter) are critical components in the path to unifying A/PIA and non-A/PIA groups on college campuses throughout the Midwest and beyond.";
          break;

        case "w32":
          blurb = "A discussion-based interactive workshop to think critically about the strategic potential of Asian American student-organized culture shows in student activism. The amount of energy and resources expended on producing these activities is a clear indicator that there is significance and meaning happening. We must look past dismissive attitudes that cultural shows are “just” colorful celebratory events, and consider how these activities could be valuable leverage in advancing student empowerment and advocacy. Participants will be invited to share knowledge about shows on their campuses. I will share resources from a course I teach at UM on documenting shows and performance groups. Together we will articulate possibilities for united action in supporting the development of these activities, and in capitalizing on opportunities to assert community presence and entitlement to resources on campus.";
          break;

        case "w33":
          blurb = "Come and learn about what the indigenous Hawaiian hula is—and is not. Steeped in both tradition and stereotypes, hula dancing generates respect from informed viewers, and ridicule from viewers more familiar instead with media distortions. How do you separate fact from fiction? In this presentation, you will learn about some of the ways that hula preserves indigenous knowledge, as well as some of the ways that hula has been subjected to bastardization. Become an informed viewer, and an advocate for promoting greater understanding of the depths of tradition that have survived over a century of colonization and commodification. You will also learn some hula basics.";
          break;

        case "w34":
          blurb = "TBD";
          break;

        case "w35":
          blurb = "This workshop will investigate APIA&rsquo;s role as a race in the current political climate. Attendees will brainstorm ways to integrate new concepts of racial meaning to advance APIDA racial consciousness in response to current events and the education paradigm. Asian Pacific Islander Americans 'are neither white nor black; they assume the benefits of non-blackness, but also the burdens of non-whiteness'. AAPI folks have been utilized as a wedge community, and have experienced increasing marginalization in a Trump era.";
          break;

        case "w36":
          blurb = "Assistant Director of Inclusion and Intercultural relations at the University of Illinois, Kenny Importante will lead a workshop on being a 1.5 generation immigrant. The 1.5 generation generally refers to immigrant children who are not quite first-or second generation Asian Americans. He hopes to discuss his own experiences of 1.5 generation describing the characteristics, growing up as an immigrant, and the addressing intersections of identities to encourage students to think about their own personal upbringing and how it relates to their own leadership and preparing for their careers. This interactive workshop will also encourage participants gain knowledge and understanding of unique immigrants that are considered 1.5 generation.";
          break;

        case "w37":
          blurb = "This workshop aims to create a space where LGBTQ+ identified APIA students can meet and build community with one another. This workshop will be broken up into a panel discussion and Storytelling & Zine Making. Our hope is to explore the vast experiences that being part of both the LGBTQ+ and APIA communities can encompass, and learn how to better tell our stories with one another and with those around us. We will also focus on the health and psychological impacts holding these identities can have on us.";
          break;

        case "w38":
          blurb = "This workshop will address the craze of the millenial generation and its complex, consumable relationship with social activism. Social activism has shaped the millenial generation as it has been rebranded from something deeply rooted in humanity to becoming something that is wearable.  As student activists of this age stand together to support social movements, it is crucial for them to reflect upon themselves and understand how their individual behaviors and actions may influence the broader social cause they believe in. This workshops will address different ways that millennials can utilize consumer capitalism for social movement, encourage student activists to understand the root of their social causes on a deeper level, and realize the power they hold within themselves as a generation.";
          break;

        case "w39":
          blurb = "TBD";
          break;

        case "w40":
          blurb = "TBD";
          break;


        default:
          blurb = "Click on an event to show more info!";
      }

        // And the blurb replaces the html contents of the event info div
        $(this).html(blurb).fadeIn();
      }).fadeIn();
    });

});
