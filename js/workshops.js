$(document).ready(function() {
  $(".grid-item").click(function() {
    // Creates jQuery variable 'event' that contains a string of whatever value
    // is in the id attribute of the selected row

    var ws_id = $(this).attr('id');
    var blurb = "";

    // idk i thought a switch statement would be a good idea
    switch (ws_id) {
        case "wkey":
          blurb = wkey;
          break;

        case "w1":
          blurb = w1;
          break;

        case "w2":
          blurb = w2;
          break;

        case "w3":
          blurb = w3;
          break;

        case "w4":
          blurb = w4
          break;

        case "w5":
          blurb = w5;
          break;

        case "w6":
          blurb = w6;
          break;

        case "w7":
          blurb = w7;
          break;

        case "w8":
          blurb = w8;
          break;

        case "w9":
          blurb = w9;
          break;

        case "w10":
          blurb = w10;
          break;

        case "w11":
          blurb = w11;
          break;

        case "w12":
          blurb = w12;
          break;

        case "w13":
          blurb = w13;
          break;

        case "w14":
          blurb = w14;
          break;

        case "w15":
          blurb = w15;
          break;

        case "w16":
          blurb = w16;
          break;

        case "w17":
          blurb = w17;
          break;

        case "w18":
          blurb = w18;
          break;

        case "w19":
          blurb = w19;
          break;

        case "w20":
          blurb = w20;
          break;

        case "w21":
          blurb = w21;
          break;

        case "w22":
          blurb = w22;
          break;

        case "w23":
          blurb = w23;
          break;

        case "w24":
          blurb = w24;
          break;

        case "w25":
          blurb = w25;
          break;

        case "w26":
          blurb = w26;
          break;

        case "w27":
          blurb = w27;
          break;

        case "w28":
          blurb = w28;
          break;

        case "w29":
          blurb = w29;
          break;

        case "w30":
          blurb = w30;
          break;

        case "w31":
          blurb = w31;
          break;

        case "w32":
          blurb = w32;
          break;

        case "w33":
          blurb = w33;
          break;

        case "w34":
          blurb = w34;
          break;

        case "w35":
          blurb = w35;
          break;

        case "w36":
          blurb = w36;
          break;

        case "w37":
          blurb = w37;
          break;

        case "w38":
          blurb = w38;
          break;

        case "w39":
          blurb = w39;
          break;

        case "w40":
          blurb = w40;
          break;

        case "w44":
          blurb = w44;
          break;

        case "w45":
          blurb = w45;
          break;

        case "w46":
          blurb = w46;
          break;

        case "w47":
          blurb = w47;
          break;

        case "w48":
          blurb = w48;
          break;

        case "w49":
          blurb = w49;
          break;

        case "w50":
          blurb = w50;
          break;

        case "w51":
          blurb = w51;
          break;

        case "w52":
          blurb = w52;
          break;

        case "w53":
          blurb = w53;
          break;

        case "w54":
          blurb = w54;
          break;

        case "w55":
          blurb = w55;
          break;

        case "w56":
          blurb = w56;
          break;

        case "w57":
          blurb = w57;
          break;

        case "w58":
          blurb = w58;
          break;

        case "w59":
          blurb = w59;
          break;

        case "w60":
          blurb = w60;
          break;

        case "w61":
          blurb = w61;
          break;
          
        default:
          blurb = "Click on a workshop to show more info!";
      }

    // there's probably better logic to this i guess
    if ($(".workshop-info").html() !== blurb) {
        $(".workshop-info").stop(true,true).fadeOut(function() {
            // And the blurb replaces the html contents of the event info div
            $(this).html(blurb).stop(true,true).fadeIn();
        });
    }
    
    });

});

wkey = "A spoken word performance from one of MAASU keynote speakers, Franny Choi. Franny Choi is a writer, performer, and teaching artist. She is the author of Floating, Brilliant, Gone, and the forthcoming chapbook Death by Sex Machine. In the past, she has been a finalist for many national poetry slams and her work has been featured on Huffington Post and Poetry Magazine.";


w1 = "Frances Kai-Hwa Wang is a writer, speaker, editor, teacher, activist, and currently works for NBC News Asian America. Her workshop will be focused on connections between APIA media stereotypes, identity issues, and what contemporary APIA creatives are doing to clap back. Challenge yourself to become a critical reader, savvy media consumer, and activist writer/content creator while celebrating hot APIA stereotype busters.";

w2 = "An Intercultural Specialist at Ohio State University will run a workshop on political correctness and microaggressions.  Though well intended, statements such as “I’m colorblind” often widen the diversity gap, causing irreplaceable harm personally and professionally. This workshop, heavily inspired by Dr. Maura Cullen’s “35 Dumb Things Well-Intended People Say”, invites participants to define and identify bias, stereotypes, and microaggressions as they relate to communication, recognize statements that align positive intent and impact, and to actively accept and provide feedback as needed on microaggressions and discuss the need to address them within society.";

w3 = "An Intercultural Specialist at Ohio State University will run a workshop on history and intersectionality in media. This workshop will dive into the historical understanding of why activism in the APIA community matters open dialogues on current issues that our community faces – the Black Lives Matter movement, and the DACA/DREAM Act/DAPA. What are the current issues that college students face? Are there resources in the community or at your institution that support underrepresented and underserved communities?";

w4 = "Roland Hwang, a UM Adjunct Professor in A/PIA Studies, Attorney and Commissioner of the MAPAAC, and a dedicated member of the APA community, will host a workshop detailing the aftermath of Asian American grievances, including the death of Vincent Chin, espionage charges against scientist Wen Ho Lee, post- 9/11 violence, the police shooting of Fong Lee, the harassment that led to the suicide of PFC Danny Chen, the indictment of ex-NYC cop Peter Liang, and indictments against hydrologist Sherry Chen and Temple University physics professor Xiaoxing Xi.";

w5 = "This workshop will analyze Students4Justice, an organization created around explicitly racist and xenophobic acts on campus, and its organizing efforts. This will be a time for us to be able to focus on what organizing can look like on our own campuses, and how we can create a coalition where we are uncompromising in our organizing and strategically use the language of our university administrations to push for accountability.";

w6 = "This workshop will focus on racial triangulation theory by Claire Jean Kim and the homogenization and racialization of Asian-American identity. It will look at how this manifests itself in Asian-American apathy and disengagement in leftist organizing. It will look at our own immigration histories and think about the policies in place during the time that our families immigrated to the United States, and how this is specifically linked to a specific framework of anti-blackness.";

w7 = "This workshop will create a discussion regarding the roots, real risks, and repercussions of eating disturbances and body issues, specifically in the APIA community. We will focus on how specific APIA cultural values (e.g., filial piety, family obligation) play into body image issues and eating disturbances in the APIA community as well as intercultural communities. Given this, we would like to provide the audience with coping mechanisms and ways to navigate body image in an increasingly appearance focused society (e.g., promote self-love and care).";

w8 = "An Associate Professor at Michigan State University, Naoko Wake has a passionate interest in the history of gender, medicine, and sexuality in the twentieth century United States and the Pacific Rim. This workshop will be a discussion-type workshop that will explore the important reasons why the APIA and LGTBQA+ communities must continue to build strong alliances in the post 2016-election world. Moreover, these communities have experienced unique sets of social perceptions as well as unpacking bias aimed towards these communities. Ultimately, this workshop will equip attendees with specific knowledge about the intersectionality between these different minority communities.";

w9 = "This workshop will focus on the intersection of academics with activism. Being on campus, Asian American student activists occupy the same (or similar) space as Asian American scholarship, but do the two meet? Depending on the local circumstances, activism and scholarship can either march together or not. It will explore ways that Asian American students can engage with Asian American scholars to create compelling ways to demonstrate the significance of Asian America on the matters that matter to many students-of-color today.";

w10 = "The vision for this workshop is to educate and facilitate conversations about mental health concerns specific to the Asian/Pacific Islander American community. The workshop will include a presentation along with interactive activities and discussion surrounding the intersectionality of mental health and the A/PIA Community. At the end of the workshop we would like participants to leave with a better understanding of mental health and seeking professional health, cultural factors specific to the APIA community in relation to mental health, and healthy ways to cope with the unique stressors that the APIA community experiences.";

w11 = "Led by a Korean Adoptee, this workshop will explore the topic of inclusivity and acceptance in APIA communities by examining how we assess other APIAs. Being Asian is typically thought of in terms of ethnicity, upbringing, and language skills which typically, adoptees lack and often considered are considered too white for APIAs to relate to. Yet by the way that society views us, APIA Adoptees are typically treated as any other APIA would be by non APIAs.";

w12 = "The goal of this workshop is to provide a brief overview of Palestine and A/PIA solidarity through an interactive presentation and Q&A session. This workshop will take an in-depth look of the Association for Asian American Studies (AAAS) and it's activism in 2013 with its resolution for supporting an academic boycott of Israel. You will gain a further understanding of the history and the need for Palestine and A/PIA to be in conversation with one another.";

w13 = "An advisor and lecturer for the undergraduate minor in the School of Social Work at the University of Michigan, Joseph aims to facilitate conversation about “Catching Up with Martin,” a chapter in the book, The Next American Revolution: Sustainable Activism in the 21st Century by Grace Lee Boggs and Scott Kurashige (2011). Who was Grace Lee Boggs and what relevance does her work have for Asian American activists today? Which works of Martin Luther King does Grace Lee Boggs examine and what are her takeaways? Are these reflections, often rooted in the social conditions of the 1960s, still relevant – and if so, how?";

w14 = "This workshop will provide a presentation and a space to learn and dialogue about the complexities of Filipinx historical condition. A history marked by multiple colonizations has led to a complicated Filipinx identity when it comes to language, spirituality, place within the API acronym (are Filipinos Asian, Pacific Islander, or Latino?), and more. We’ll start with a discussion of the Fil-Am pensionado program in the Midwest, a program in which government sponsored Filipinx students to study in the U.S.  Next, we’ll transition to a discussion about what it means to work towards decolonization and why this is important. With this new lens through which to view one’s place in the world, we will end with a discussion of what reflections and actions this knowledge inspires. Throughout, we’ll engage questions such as: What does it mean to decolonize? What are our responsibilities as present-day APIA students? What are the opportunities and challenges?";

w15 = "A recent graduate from the University of Michigan who is currently studying at John Hopkins University, Swati's workshop aims to provide a dialogue on the South Asian experiences with gender and sexuality. It will explore the influence that our colonial history and diasporic experience has on our experience today. This workshop aims to equip attendees with knowledge and resources to engage in thoughtful conversation and action.";

w16 = "This hands on workshop sheds light on many disparities affecting minority communities locally and globally, including rural health, environmental, and racial disparities. The workshop encourages participants to critically think about their role and find their voice in attending to disparities. Amaal will present her research in Mongolia regarding the environmental impacts of mining activities in rural areas. Anum’s research focuses on detangling complexities associated with dual identity status. We want to demonstrate solidarity with our participants through our research and workshop activities. Additionally, we hope participants will be motivated to pursue social justice avenues in advocating for the elimination of disparities within minority communities. We anticipate members leaving with the feeling of “sometimes your voice is your most powerful tool.” ";

w17 = "This workshop will facilitate a discussion of the perpetual foreigner syndrome and tackle the question, 'Where are you really from?' If as Asian Americans, we claim to be American, what qualities and characteristics define us as American? Often times Asian Americans can easily list off qualities that make them Asian, but are left with only the fact that they were born in America when defining qualities that make them American. This workshop will explore what it means to be American, largely focused on second generation Asian Americans and onwards.";

w18 = "This workshop aims to cover the diverse experiences of growing up Asian American. Everyday conversations around dating, sleepovers, mealtimes even can vary greatly in immigrant households, especially when generations come of age in different environments. Through storytelling, “Our Stories, Our Voices” seeks to understand how youth growing up in Asian American households relate to their cultural identity and parents.";

w19 = "Presented by the Detroit Asian Youth Project - How do we build a safe, intentional space for all on the margins?  In this interactive workshop, we will share the history and our narratives of Detroit’s Chinatown.  We will then focus on intentional trans-cultural coalition building to counteract gentrification in the Chinatown neighborhood and beyond.  Come and learn/share ways to outline effective strategies for resistance-building.";

w20 = "This workshop will focus on sharing multiracial and mixed-heritage Asian/Pacific Islander experiences set in the context current population statistics, history and lived experiences. Regardless of how they racially identify (multiracial or not), participants will be able to 1) gain an understanding of the historical and political impacts on multiracial experiences 2) consider their own socialization around race through a monoracial and multiracial lens 3) reflect on how monoracially conceived spaces impact their multiracial peers.";

w21 = "A recent graduate of University of Michigan and active participant in the APIA community on campus, Rosalie will present a workshop to create a impact in seemingly irrelevant career fields. If you’ve ever wrestled with bridging the gap between your career and the all-too-important task of reversing oppression, join us in a dialogue as we explore ways to bridge the gap between our career and the all-too-important task of reversing oppression. This workshop will be more anecdotal in nature, with some personal brainstorming time so that you can begin thinking of practical steps to take as you start your career. The hope is that you walk away knowing that being a part of a justice movement isn’t mutually exclusive from the career you may have – and that you’ll know how to take practical steps to get involved once you graduate.";

w22 = "Director of the Multicultural Center for Academic Excellence at the University of Minnesota, Aurelio Curbelo will lead a workshop that aims to disseminate information on the type of qualities needed in AIPA student leaders to become competitive at a global level. The workshop will present some of the most successful programs currently available in Land Grant Institutions to prepare AIPA Global leaders. It will also discuss effective strategies implemented by Land Grant institutions to break the barriers of inequality in STEM areas.";

w23 = "As the director of Asian American and Asian Resource and Cultural Center at Purdue University, Xavier Hernandez will lead a workshop on improv theater exercises that showcase prominent issues facing both student organizations and individual students. Participants will be asked to engage in improvised scenarios that reflect challenges faced by Asian/American student leaders on campus. Attendees will be encouraged to share their personal experiences in a safe space and discuss useful strategies for handling situations of interpersonal conflict, leadership development, and community/public relations.";

w24 = "As the director of Asian American and Asian Resource and Cultural Center at Purdue University, Xavier Hernandez will lead a workshop that will examine the multiple ways that Asian/American student organizations create an active forum for self-discovery and continue to act as such long after graduation. He will chronicle his own path from as an active participant in Filipino American student organizations to his professional career in higher education. This full circle journey will ultimately illustrate how the Asian/American student experience provides invaluable opportunities for all attendees, regardless of their individual interests and aspirations, to thrive within their families, campuses, communities, and professional fields.";

w25 = "A workshop on art activism that will note the power of representation in literature. It is imperative that we provide Asians with an opportunity to see themselves represented in literature, not only to bolster student engagement, but because students deserve this. Today, you will learn about 30 powerful books to transform your identity and give you a more reflective insight about the Asian experience in the U.S.. Several fiction and non-fiction titles will be highlighted that can be used across content areas.";

w26 = "This workshop will engage attendees in stimulating discussion surrounding inclusivity with AAPI student organizations. For student organizations who are challenged with programing around one specific ethnic group 'too much', how do you acknowledge and move forward? Do you talk briefly about many groups or take longer and focus on a few ethnic groups? This workshop will consist of group discussions and brainstorm ideas of successful outcomes to bring back to campus.";

w27 = "Attendees will engage in a dialogue-like workshop that will focus on sharing their perspectives on what kinds of peer and campus support has been effective in helping their organizations develop and succeed. This workshop will draw from participants as well as the facilitator to study practices best used to support APIA student organizations. Possible topics covered include: leadership retreats, workshops, team-building, peer support networks.";

w28 = "This workshop would provide a historical overview of the WWII Japanese American incarceration, and invite participants to consider its modern-day implications.";

w29 = "Each of your organizations builds community for students centered around one shared identity. However, even though that one identity is shared, there is still diversity within it. Each member possesses other identities that may or may not be shared by all or most of the group. How do you ensure that all students from your shared identity feel included and supported, even if they posses intersecting identities (nationality, sexual orientation, religion, gender) that are in the minority within the organization? Let's talk about and develop strategies together. <br> In this workshop, intersectionality will be defined and students will be able to name types of identities that people can hold. Students will understand the importance of being inclusive of all identities in order to be most effective and successful in supporting students of their organization\'s primary identity. Students will share experiences in the large group, and then break into small groups to share ideas and develop strategies for being inclusive of intersecting identities.";

w30 = "Our workshop aims to discuss the role Asian Americans play in hip hop culture. We hope to teach about the historical context of hip hop, discuss anti-blackness in hip hop, and open up the discussion on the role of Asian Americans in hip hop culture and the social issues that come up at the intersection of these identities. \n\nOther important key concepts to discuss are authenticity and commodification. What does it mean to be considered “authentic” hip hop and why is it difficult for Asian Americans to fit that mold? By the end of the workshop, we hope our attendees walk out more inspired to pursue their passions regardless of race or other identities, support other artists in their communities who are doing so, and be able to confidently say that hip hop belongs to everyone.";

w31 = "This workshop is led by Nicole Brindejonc, the founder of the Pacific Islander Student Association at the University of Michigan. It will discuss the ways that acceptance and respect of racial identities (or really any identity for that matter) are critical components in the path to unifying A/PIA and non-A/PIA groups on college campuses throughout the Midwest and beyond.";

w32 = "A discussion-based interactive workshop to think critically about the strategic potential of Asian American student-organized culture shows in student activism. The amount of energy and resources expended on producing these activities is a clear indicator that there is significance and meaning happening. We must look past dismissive attitudes that cultural shows are “just” colorful celebratory events, and consider how these activities could be valuable leverage in advancing student empowerment and advocacy. Participants will be invited to share knowledge about shows on their campuses. I will share resources from a course I teach at UM on documenting shows and performance groups. Together we will articulate possibilities for united action in supporting the development of these activities, and in capitalizing on opportunities to assert community presence and entitlement to resources on campus.";

w33 = "Come and learn about what the indigenous Hawaiian hula is—and is not. Steeped in both tradition and stereotypes, hula dancing generates respect from informed viewers, and ridicule from viewers more familiar instead with media distortions. How do you separate fact from fiction? In this presentation, you will learn about some of the ways that hula preserves indigenous knowledge, as well as some of the ways that hula has been subjected to bastardization. Become an informed viewer, and an advocate for promoting greater understanding of the depths of tradition that have survived over a century of colonization and commodification. You will also learn some hula basics.";

w34 = "Ally and coalition building on campus as leaders can be a challenge and yet powerful when efforts are successful in building and maintaining these relationships. Racial climate on our college campuses as well as in our society at large call us to consider more effective and meaningful ways we can support one another as individuals and communities of diverse backgrounds and experiences. Session will explore core concepts, resources, and tools around allyhood and coalition building as the foundation for participants to consider their own goals and motivations as individuals to build solidarity and support within and across racial communities.  In addition to discussion, participants will have the opportunity to do their own action planning on how they might make movement on their current efforts as individuals or student organizations. All are welcome to participate in this discussion regardless of your “roles/titles”in your respective student organizations, as our diverse perspectives and experiences adds value to our collective knowledge.";

w35 = "This workshop will investigate APIA&rsquo;s role as a race in the current political climate. Attendees will brainstorm ways to integrate new concepts of racial meaning to advance APIDA racial consciousness in response to current events and the education paradigm. Asian Pacific Islander Americans 'are neither white nor black; they assume the benefits of non-blackness, but also the burdens of non-whiteness'. AAPI folks have been utilized as a wedge community, and have experienced increasing marginalization in a Trump era.";

w36 = "Assistant Director of Inclusion and Intercultural relations at the University of Illinois, Kenny Importante will lead a workshop on being a 1.5 generation immigrant. The 1.5 generation generally refers to immigrant children who are not quite first-or second generation Asian Americans. He hopes to discuss his own experiences of 1.5 generation describing the characteristics, growing up as an immigrant, and the addressing intersections of identities to encourage students to think about their own personal upbringing and how it relates to their own leadership and preparing for their careers. This interactive workshop will also encourage participants gain knowledge and understanding of unique immigrants that are considered 1.5 generation.";

w37 = "This workshop aims to create a space where LGBTQ+ identified APIA students can meet and build community with one another. This workshop will be broken up into a panel discussion and Storytelling & Zine Making. Our hope is to explore the vast experiences that being part of both the LGBTQ+ and APIA communities can encompass, and learn how to better tell our stories with one another and with those around us. We will also focus on the health and psychological impacts holding these identities can have on us.";

w38 = "This workshop will address the craze of the millenial generation and its complex, consumable relationship with social activism. Social activism has shaped the millenial generation as it has been rebranded from something deeply rooted in humanity to becoming something that is wearable.  As student activists of this age stand together to support social movements, it is crucial for them to reflect upon themselves and understand how their individual behaviors and actions may influence the broader social cause they believe in. This workshops will address different ways that millennials can utilize consumer capitalism for social movement, encourage student activists to understand the root of their social causes on a deeper level, and realize the power they hold within themselves as a generation.";

w39 = "From our experience of reaching out to potential writers for Uncover, the most common response we receive is “I don’t have a story to share.” We push back against this notion: Each experience is unique and valid. In this interactive workshop, our goal is to help participants recognize that everyone has a story worth sharing. We aim to encourage discussion amongst participants about the value of sharing personal narratives. We also hope to encourage participants to use Uncover and other social media spaces as platforms to incorporate activism into their everyday lives. Oftentimes, social media activism is frowned upon for its perceived ineffectiveness. However, through our workshop, we hope to show how social media activism can act as a starting point in raising awareness about various social issues, and that it can lead into further engagement with social justice past social media.";

w40 = "Formed in 2008, the South Asian American Digital Archive (SAADA) is a non-profit organization that has aimed to help create tools and resources to recover the rich and complex history of the South Asian diaspora in the United States.  In this presentation, Manan will discuss the origins of the project and how the larger objective to recover the historical presence of South Asians in the U.S. might provide some insights into the obstacles faced by our communities.  Manan will be addressing the long history of xenophobia and racism faced by South Asians in the U.S., and how key individuals and organizations have confronted them in history.  One of the key goals in this presentation will be to connect the historical past with the tumultuous present, and Manan would like to facilitate a discussion in which attendees consider what those connections are. ";

w44 = "This workshop is intended to make space for LGBTQ+ identified APIA people to share in common experiences of coming out, identity exploration, and queer life. Participants will have the opportunity to participate in activities that center their intersectional experiences for the purpose of self-reflection, but also to use their own stories as tools for social change. This workshop is multi-modal and will allow for large group interaction, small group discussion, and personal reflection. ";

w45 = "Here's the stereotype: you work hard to get good grades. You participate in extracurricular activities to have things to put in an application or resume. But how comfortable are you leading a group of peers? Or having all eyes and ears on you? In this discussion-style workshop, we'll explore the ways Asian American students contribute to their \"invisibility\" and practice skills to become more visible and heard, in the classroom and beyond.";

w46 = "This workshop will bring awarness to the differences between food justice and the charitable model of food security. Attendees will be better equipped to connect the food justice movement to the social justice movement. Attendees will also learn about how systems of oppression intersect and affect people of different identities and learn about how grassroots efforts are cultivating accessible solutions that also intersect to nourish themselves and their communities.";

w47 = "Human beings are driven by three things in life: food, water, and sex. This includes Asian Americans. Yes, we have sex too. How does our generation of Asian Americans view sex and sexuality? Where do our attitudes towards sex come from? How are changing gender roles in today’s generation affecting the way we approach dating, relationships, and the power dynamics related to sex? From the Kama Sutra to dating & sex, to body image & eating disorders, to breaking gender norms, to addressing the asexual model minority to Asian Americans in pornography, we're raising the bar and asking you to analyze that very carefully guarded core of our existences: S-E-X";

w48 = "Want to ace that interview? Or make the perfect first impression? Know what to wear to that party? How is travel the new social cache? How do we travel if we have no time or money? When everything seems intuitive, we can make complete fools out of ourselves. <br><br>The subtle prejudice of Western professional etiquette have undermined Asian Americans’ potential for leadership in this country: The AAPI community constitute the highest percentage of degree holders in higher education, and yet also the lowest percentage of those who are promoted to executive level positions. Why, and how do we change this?<br><br>This workshop will highlight the nuanced cultural disparities in professionalism and how it affects our self-identity when we encounter the “bamboo ceiling.” We will learn how to overcome overlooked hurdles together, understand how travel will not impede but rather strengthen your career path (whether it’s medicine, law, art, business, or tech), reappraise all the obstacles that may prevent you from traveling, what to say when conversations get awkward, and finally know the difference between biz casual vs. viz professional, wine vs. champagne, black vs. white tie affairs.";

w49 ="\"Finish last in your league and they call you idiot. Finish last in medical school and they call you doctor.\" - Abe Lemons <br><br> Sometime in your life, we bet that someone out there wanted you to be a doctor, whether it was your parents, society, your 1st grade chemistry teacher, your grandma…Frustrating, isn’t it? To not know for sure whether it’s really coming from you or something spoon-fed from a stereotype? <br><br> This workshop will cut through the BS and get straight to the point: What is it really like to apply for and become a med student as an AAPI? What are the secrets to getting in? Is it worth it in the end? What if you want to keep your social life (possible!)? What if you're really a bad student/test taker (you’re not alone!)? <br><br> We will supply you with insiders' knowledge of the med school/residency application processes, teach you how to ensure self-care, wellness and balance during these stressful times, inspire you to perfect time management so you can even travel the world as a med student (110 countries and counting!), and equip you with the language to determine whether medicine — or whatever career path you ultimately choose -- is truly right for you.";

w50 = "While the technology industry is heavily criticized for its lack of diversity, Asian Americans are rarely a part of the discussion. The prevailing stereotype of Asians being engineers and coders shadows in part, the lack of diversity Asian Americans have in large tech companies. We plan on demystifying these stereotypes in this workshop while being transparent about Asian American influence, identity, and representation in tech. As Asian Americans working in tech, we know first-hand the obstacles and challenges that come our way in seeking diversity and inclusion. We will focus on our individual experiences in navigating our career journey as Asian Americans while shedding light on certain aspects of tech that need change. We’d hope that the audience will realize that tech does not only represent “engineers, coders, hackers” but that there are a modicum of fields where Asians can take part in. This workshop will be a presentation followed by a panel-led career conversation. Questions to think about: career path, internships, tips and tricks to land a job in tech, the role of Asians in tech, mentorship. As the Asian network continues to expand to all spectrums of the work force, we hope to raise diversity, inclusion, and awareness in the workforce-- because, #UnitedWeStand.";

w51 = "The structure of this workshop is interactive and discussion-based. This includes defining networking and discussing how networking influences different aspects of our lives from college, to community, to workplace. Tools will be provided during the workshop to allow participants to practice networking and receive peer feedback. Additionally, the workshop will encourage participants to identify their values and passions. Participants will then prepare short introductions that present themselves authentically and clearly to people who can help them find opportunities, achieve their goals, and create change. The end goal is to have participants step outside of their comfort zone, use networking tools they’ll learn in the workshop, and prepare them to approach networking situations with confidence.";

w52 = "The Critical Ethnic & Asian/Pacific Islander American Studies Working Group welcomes you to join us in a workshop on the theme of Asian American mental health in conversation with the Asian American Literary Review’s ‘Open in Emergency: A Special Issue on Asian American Mental Health.’ The journal issue is an arts and humanities intervention that decolonizes mental health, recalibrating existing mental health approaches and resources to better engage race and Asian American experience. In this workshop, participants will be reading excerpts from the journal and engaging in a roundtable discussion on mental health and Asian Americans. The end goal of the workshop is to help destigmatize mental health issues in our communities by paying close attention to structures of racism, heteropatriarchy, etc and to blur the distinctions between self-care and community building.";

w53 = "We all have different styles of leadership. Whether you’re the “big-picture thinker” or the “analytical” person, we all have unique strengths when working in a team. Through this workshop, participants will have a chance to figure out which animal they are most connected with and gain a better understanding of their strengths, challenges, and how to best work with other types of personalities in leadership roles.";

w54 = "How do we categorize ourselves versus how society categorizes us? Sometimes our overlapping identities can create more systems of discrimination and oppression. Creating awareness can help us better acknowledge and ground our differences in order to promote ally ship. Come join the discussion!";

w55 = "Our rich, diverse history is rarely reflected in the history books we grew up with. Why is that? Understanding our community’s history is an important piece in shaping the future of our movements. In order for us to become better advocates for our communities, we must unpack the historical context that is untold, and unwritten. What is your role in shaping history? Come join the discussion!";

w56 = "This workshop will be facilitated by Marie Ting, the Associate Director of the National Institute for Diversity. Are you going to graduate school or thinking about it?  This session will provide some very practical tips on surviving…and maybe even thriving in graduate school!";

w57 = "Criticisms of identity politics suggest that focus on our own identities prevents us from supporting others. The perceived binary that produces the “Us vs. Them” mentality stems from a long history of an unspoken competition that could only be won through assimilation. In this workshop, we’ll explore the history behind intra-community bias and how we can recognize and move past these prejudices.";

w58 = "The University of Michigan Sexual Assault Prevention and Awareness Center (SAPAC) will be presenting this workshop on healthy relationships through APIA lens. In this workshop, two trained student facilitators will engage in dialogue about what it means to have a healthy relationship, as well as identifying positive behavior components of and reflecting on one&rsquo;s unique needs and desires. This workshop is intended to educate and inform about what constitutes a healthy relationship and how to achieve this while also opening up the workshop for discussion on modern issues that may hinder or prevent their development.";

w59 = "The University of Michigan Sexual Assault Prevention and Awareness Center (SAPAC) will be presenting this workshop on bystander intervention, with a focus on situations and issues particularly pertinent to the APIA community. In this workshop, two trained student facilitators will begin with the importance of recognizing situations of interest before discussing the ways one can be equipped for bystander intervention. Participants will then be confronted with hypothetical but realistic settings, requiring students to consider in what situations are bystander intervention necessary, and how one would choose to step in and prevent potential violence.";

w60 = "A recent study showed that applicants with \"Asian names\" are 20-40% less likely to receive a callback based on their resume alone - which begs the question, is it worth it to \"whiten\" your resume? Many candidates may need to consider what it takes to really land a job and answer if it's worth hiding your culture to get hired. Find out these secrets about recruiting - resumes - and job interviews with a recruiter with experience from the tech, consulting, accounting and law fields, and more!";

w61 = "Fear of Failure is a hands-on approach and in-depth study into how individuals in the Asian American community deal with failure. Using a broad spectrum of topics and techniques from an insight into model minority to how storytelling affects mental health, attendees will be lead on a journey through their own life and then realize their place in the greater community. Be prepared to let go off your fear of failure, your perfectionist tendencies and favorite procrastinating past times.";