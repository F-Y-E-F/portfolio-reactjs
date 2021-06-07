import kotlin from '../assets/kotlin.png'
import android from '../assets/android.png'
import intellij from '../assets/intellij.png'
import git from '../assets/git.png'
import flutter from '../assets/flutter.png'
import dart from '../assets/dart.png'
import react from '../assets/react.png'
import html from '../assets/html.png'
import css from '../assets/css.png'

export const allApps = [
  {
    name: "Medicine App",
    year: 2020,
    imageUrl:
      "https://i.imgur.com/AHQozSH.jpg",
    githubUrl: "https://github.com/F-Y-E-F/Medicine-App-In-Flutter",
    lang: "Flutter",
  },
  {
    name: "Imagine",
    year: 2021,
    imageUrl:
      "https://i.imgur.com/q9oKacB.jpg",
    githubUrl: "https://github.com/F-Y-E-F/Imagine",
    lang: "Kotlin",
  },

  {
    name: "Medled",
    year: 2020,
    imageUrl:
      "https://i.imgur.com/qoEzmqK.jpg",
    githubUrl: "https://github.com/F-Y-E-F/medled",
    lang: "Kotlin",
  },
  {
    name: "Chess.io",
    year: 2021,
    imageUrl:
      "https://i.imgur.com/9Arqdze.jpg",
    githubUrl: "https://github.com/F-Y-E-F/chess.io",
    lang: "Flutter",
  },

  {
    name: "YeeBum",
    year: 2020,
    imageUrl:
      "https://i.imgur.com/PBFDxSY.jpg",
    githubUrl: "https://github.com/F-Y-E-F/Yeelight-Control-Desktop-And-Mobile-Apps",
    lang: "Kotlin",
  },
  {
    name: "Weather App",
    year: 2021,
    imageUrl: "https://i.imgur.com/kC8sbGB.jpg",
    githubUrl: "https://github.com/F-Y-E-F/WeatherApp",
    lang: "React",
  },
];

export const resumeEducation = [
  {
    date: "April 2021",
    title: "3-rd place in hack heroes competition",
    subTitle:
      "I won 3-rd place in hack heroes programming competition, by doing medled app - app to control medicines taken and contact doctor - patient. The theme of competition was \"Health\"",
    url: "http://hackheroes.pl",
  },
  {
    date: "February 2021",
    title: "Finish full flutter course on Udemy",
    subTitle:
      "Since end of 02.2021 I finish Flutter course, which I bought ealier. I learned over there a lot of useful thing and technologies like flutter state managment or firebase platform",
    url: "https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/",
  },
  {
    date: "October 2019",
    title: "Done kotlin course on youtube",
    subTitle:
      "I still making the kotlin course on youtube done by Revolshen. I'm also the moderator on his discord server named \"Kotliners\". I learned over there the basics of kotlin.",
    url: "https://www.youtube.com/watch?v=DOOa89jyBGw&list=PL7i9G1Htb_PvSiltEra3FJM41sjBy7YBb",
  },
];
export const resumeExperience = [
  {
    date: "May 2021",
    title: "Nothing here yet",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    url: "http://hackheroes.pl",
  },
  {
    date: "May 2021",
    title: "Nothing here yett",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    url: "http://hackheroes.pl",
  },
  {
    date: "May 2021",
    title: "Nothing here yettt",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    url: "http://hackheroes.pl",
  },
];

export const services = [
  {
    title: "Kotlin Support",
    subTitle:
      "I can create mobile apps or features in kotlin. Also I can join to already started project. I know basics of tean-work in git version control. I know MVVM architecture and a lot of firebase things.",
    bigSubTitle: 'I can create mobile apps or features in kotlin. Also I can join to already started project. I know basics of team work in git version control. I can create kotlin apps with: hilt, koin DI,  Retrofit, Rxjava, Coroutines, Firebase : Auth,  Cloud Firestore, Realtime database, notifications, storage. I know Room database MVVM clean architecture model, basics of material design, integrations with android features and more.',
    image: kotlin,
    technologies: [
      {
        image: kotlin,
        key: 'kotlin'
      },
      {
        image: android,
        key: 'android'
      },
      {
        image: intellij,
        key: 'intellij'
      },
      {
        image: git,
        key: 'git'
      }
    ]
  },
  {
    title: "Flutter Support",
    subTitle:
      "I can create mobile, desktop, web apps in flutter from basics or join recently work. I know a lot of widgets and their applications. Also I can apply state management to app. Click here to more",
    bigSubTitle: 'I can create mobile, desktop, web apps in flutter from basics or join recently work. I know a lot of widgets and their applications. Also I can apply state management to app. I\'m able to implementation a lof of features using firebase and another libraries from pub.dev. I can apply Providers state management in recently created app.',
    image:
      "https://iconape.com/wp-content/png_logo_vector/flutter.png",
    technologies: [
      {
        image: flutter,
        key: 'flutter'
      },
      {
        image: dart,
        key: 'dart'
      },
      {
        image: android,
        key: 'android'
      },
      {
        image: git,
        key: 'git'
      }
    ]

  },
  {
    title: "React Support",
    subTitle:
      "I can create simple web apps in react js. This portfolio is also made in this language. Also I can apply git to that technology. I know basics of hooks, functions and class-based components.",
    bigSubTitle: 'I can create simple web apps in react js. This portfolio is also made in this language. Also I can apply git to that technology. I know basics of hooks, functions and class-based components. I created weather web apps wchich based on weatherdata api. Also I\'m still learning by watching tutorials.',
    image: react,
    technologies: [
      {
        image: react,
        key: 'react'
      },
      {
        image: html,
        key: 'html'
      },
      {
        image: css,
        key: 'css'
      },
      {
        image: git,
        key: 'git'
      }
    ]

  },
];
