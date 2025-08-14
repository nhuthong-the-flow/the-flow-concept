interface DataType {
  videoSrc: string
  imgSrc: string
  title: string
  author: string
  tag: string[]
}

const TYPE_3D: DataType[] = [
  {
    title: 'Astronaut On The CatCheese',
    tag: ['3D'],
    author: 'The flow',
    imgSrc:
      'https://i.vimeocdn.com/video/1810444815-bc6c40a00c576c4e828592c765a3dba1963eb72b0f092328f2d9b5ba8665af22-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920421471/rendition/1080p/file.mp4?loc=external&signature=de1285b53b682461eff70b851550d43e6045e0f00520318b24d49e252a5f0577',
  },
  {
    title: 'Sonic Waves: Speaker Symphony',
    tag: ['VFX'],
    author: 'The flow',
    imgSrc:
      'https://i.vimeocdn.com/video/1810452176-1466ba748607f83825bacafdacf8a1e812760fe07bce293d0ba694ca8c88d381-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920426570/rendition/1080p/file.mp4?loc=external&signature=74050054f688b689cc230ebad6e8805415c70e0ef743e0d1e9f167b0b1af21d1',
  },
  {
    title: 'Passion crafts timeless dedication',
    tag: ['3D'],
    author: 'The flow',
    imgSrc:
      'https://i.vimeocdn.com/video/1810444936-ceb39187c75747a2a0fd6f9021151003cb0c8a92d1fee9e3a8c8c5af5411f17c-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920421511/rendition/2160p/file.mp4?loc=external&signature=eff92d0278abfc12eeb59e25071ae17a0b14c5f26449482d2737cf1df35edbcc',
  },
  {
    title: 'Candy Crush Saga Chest',
    tag: ['Motion'],
    author: 'Candy Crush Saga',
    imgSrc:
      'https://i.vimeocdn.com/video/1810446458-85c9ff5e780aea469b43f8681dfeb4093a4c4f1cef10e40f45c0d8528f6d671e-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920422596/rendition/1080p/file.mp4?loc=external&signature=9be7b89524fbe05e84c113a05cba21f7c0e9bfb970423c1056534a92492dc8ac',
  },
  {
    title: 'Cool day DW',
    tag: ['3D'],
    author: 'The flow',
    imgSrc:
      'https://i.vimeocdn.com/video/1810445283-3db4c6c78271ed9bd40f454d0135bc18780bb680e433626102cbb5cdafba9445-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920421775/rendition/1080p/file.mp4?loc=external&signature=3ca990afdedc8c92dd61c3782d0a53ae1ef952be8f6ef4ba97ed0bd301004ae6',
  },
  {
    title: 'Utaimashou Music Game',
    tag: ['Motion'],
    author: 'Amanotes',
    imgSrc:
      'https://i.vimeocdn.com/video/1810446556-1cb252ceb3589cbd8396bbd737e71124fb6869619b5ea6067915522388a29ecd-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920422514/rendition/1080p/file.mp4?loc=external&signature=f840f15849b7ff223623ffaada0838495b0bc90656d182cf9395a1a7889aa4e1',
  },
  {
    title: 'Super-app Game Of Song',
    tag: ['Motion'],
    author: 'Amanotes',
    imgSrc:
      'https://i.vimeocdn.com/video/1810446409-be1cc4a2212e52899de60e8beeb3e29be12acf56e94abc2e2b551dc3d4c97b3a-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920422477/rendition/1080p/file.mp4?loc=external&signature=031fdd4a3ee49560350066d4e513e9ae11cc83ef7c69b3ad0edf18c9e8d2885b',
  },
  {
    title: 'Smart Slicks,Safe Connects',
    tag: ['3D'],
    author: 'The flow',
    imgSrc:
      'https://i.vimeocdn.com/video/1811412357-616b408c5dc81e40c4bd4373819a39479e8019ead98a8661a477d8ce00029366-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920442613/rendition/1080p/file.mp4?loc=external&signature=3b79f6401fc3e9ee9b7852635e21575c0bb5ecce28d6344a72691f7ea9596f94',
  },
  {
    title: 'Hope Awaits',
    tag: ['3D'],
    author: 'The flow',
    imgSrc:
      'https://i.vimeocdn.com/video/1810445608-d5a9235f89bfdf0ca6478960585775f0441cbf337030d2e66c40e9525db1e255-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920421810/rendition/2160p/file.mp4?loc=external&signature=1f24718912c78026bee3926c6a22463864c7c5a789c46a2e65d1c76ad57d7f0a',
  },
  {
    title: 'Restless launching',
    tag: ['3D'],
    author: 'Hanbrotherz',
    imgSrc:
      'https://i.vimeocdn.com/video/1810445300-ffa258dff4df1f0c60f4830e1867cc40290e5c4775edf23b2f2a3c0c554ba4f7-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920421751/rendition/1080p/file.mp4?loc=external&signature=3146cc8cff4ddc0926fc6b7be1ebc586ca826e9c3737696fa312de5b4770fb1f',
  },
]

const TYPE_MOTION: DataType[] = [
  {
    title: 'Motion Mastery: Creative Showcase',
    tag: ['Motion'],
    author: 'The flow',
    imgSrc:
      'https://i.vimeocdn.com/video/1810446919-2329d599074a9f07682d0b6e00582c46e775ad3bcdf46405a7537fa55af1a839-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920422769/rendition/1080p/file.mp4?loc=external&signature=3440e3839502a958f519ff2eaa4040faedd68858af6d09321d0b0de6b5e7e9ff',
  },
  {
    title: 'Motion Mastery: Creative Showcase',
    tag: ['Motion'],
    author: 'The flow',
    imgSrc:
      'https://i.vimeocdn.com/video/1810446869-8590e60ac4a76d08920765b70a03d4b0afaf1ae3c6e3c7f860a2928eae4c921c-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920422710/rendition/1080p/file.mp4?loc=external&signature=fd0f03c2d196204969fdf6029c814feb752d6c20e45de5a1a15db9e68a1363aa',
  },
  {
    title: 'Chumbi Staking Announcement',
    tag: ['Motion'],
    author: 'Chumbi',
    imgSrc:
      'https://i.vimeocdn.com/video/1810446645-011516b094d1ef26946e4161a066d2d8d6dc7ffcf103170dccf094ccd777b1af-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920422683/rendition/1080p/file.mp4?loc=external&signature=660d615816ad2b83f60a1e91538b2e5165a29f37de7c4d8aa020734501afb497',
  },
  {
    title: 'Cadenverse Launching',
    tag: ['Motion'],
    author: 'Amanotes',
    imgSrc:
      'https://i.vimeocdn.com/video/1810447091-6cf77f2841a79cc08e227b25c98a3c5778f8e63bb7a9083d78f942815dbfdb07-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920422651/rendition/1080p/file.mp4?loc=external&signature=8ab565d67dc4dfd6048200d6e3c02a6f011b37ddd751c8dfca8ad274a7b0f049',
  },
  {
    title: 'Threads Drop: Urban Style Launch',
    tag: ['Motion'],
    author: 'Hanbrotherz',
    imgSrc:
      'https://i.vimeocdn.com/video/1810446580-4cb91fff8dde2c7f03ae869dab8aa18558ff3b0268ded2def550bc04c40718ae-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920422626/rendition/1080p/file.mp4?loc=external&signature=e11ed0a295435be73e567fd21e24869a83e19974df8b60d03a22f48c7c98f482',
  },
  {
    title: 'Juke box Music Game',
    tag: ['Motion'],
    author: 'Amanotes',
    imgSrc:
      'https://i.vimeocdn.com/video/1810446461-7b5a017feaf0bec1692dfde5c72e8b24ad56bb0ed555c7ec752137122b4766a5-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920422545/rendition/1080p/file.mp4?loc=external&signature=e648d2188a60ae8468689547b39f41b36aa128896814076f071f9ec72001f415',
  },
]

const TYPE_VFX: DataType[] = [
  {
    title: 'Tiger Rap Music video',
    tag: ['VFX'],
    author: 'Tiger',
    imgSrc:
      'https://i.vimeocdn.com/video/1810452126-3f6d010a3e371e78402b5ebc6c48a05cf75e945f5e18be7ba9d94f1b5b66ddff-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920426514/rendition/1080p/file.mp4?loc=external&signature=00a335dd611aa96763a269c0eb6228b2c76389ec71f2b9ec2455b2a40e4a7ec2',
  },
  {
    title: 'The Returning Announcement',
    tag: ['VFX'],
    author: 'Hanbrotherz',
    imgSrc:
      'https://i.vimeocdn.com/video/1810452053-843511f4fc1ebcd68511e1d49aea3c706a5e42025c1668349931a411d31e3560-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920426410/rendition/1080p/file.mp4?loc=external&signature=5d5aff544aafa0910f35accb7a459148b94fd222d22a3bff6b1909f1abbeecff',
  },
  {
    title: 'Halloween Gif',
    tag: ['3D'],
    author: 'The flow x Pstudio',
    imgSrc:
      'https://i.vimeocdn.com/video/1810445384-6db492c08a2af1c480f921ce72c73fd3195230fcee7e62df4c148c5315400211-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920421730/rendition/1080p/file.mp4?loc=external&signature=476e99f93e151b1e335b3184daf075cb0275dd025fd1b2c63b02de94319cd353',
  },
  {
    title: 'CGI. Giant Beer',
    tag: ['3D'],
    author: 'Bivina',
    imgSrc:
      'https://i.vimeocdn.com/video/1810445205-7b293d1073abe42fdc8b5693756b23b7b8d60be25ab0881e285a91bba1a45a5f-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920421671/rendition/2160p/file.mp4?loc=external&signature=0c26e50fe8fe2076dd551496e6c82e68d9ffed09727a218965eeb9741e7c4555',
  },
  {
    title: 'CGI. Tiktok Shop Mall',
    tag: ['3D'],
    author: 'Tiktok',
    imgSrc:
      'https://i.vimeocdn.com/video/1810445142-1269354e0e5e74032ce069777e34b91e0b5cd1cc76dde10fdc7f6d1efcb3299d-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920421599/rendition/1080p/file.mp4?loc=external&signature=86141326c1cd3130ab50955b2f885ad9fdacde0eeeb934b2fd25c8747b4b254f',
  },
  {
    title: 'The Motion intro',
    tag: ['3D'],
    author: 'The flow',
    imgSrc:
      'https://i.vimeocdn.com/video/1810445175-479b37e4ac9b449e80ed516b7bfe4eb69aa7429023368b9ea84f46b2a31aee4e-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920421546/rendition/1440p/file.mp4?loc=external&signature=371d854a24c9bcf83e108a5786d509e0a45d9bad48ad255ae3d89edbaad9cef0',
  },
  {
    title: 'Activated The Futuristic Controlling ',
    tag: ['VFX'],
    author: 'The flow',
    imgSrc:
      'https://i.vimeocdn.com/video/1810451942-0c39860be9010cf2e48fea1c292a1335be3f5bbe2bfb53da21c90ce0be63b147-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920426378/rendition/1080p/file.mp4?loc=external&signature=3d132fe916b3880f6310473da12f654c8642950736fabcf3952e71986a93c9e3',
  },
  {
    title: 'Forgotten Passion, Reawakened Glory',
    tag: ['3D'],
    author: 'The flow',
    imgSrc:
      'https://i.vimeocdn.com/video/1810445738-8c1eb1d18449f16a780fa0b9a653296546a0e996e2ea5a6f805e106c4e0db063-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/950454908/rendition/1080p/file.mp4?loc=external&signature=33e0d5658b0eef2f452a151c475344dcad86ec25b018031998e999a2fd58be9c',
  },
  {
    title: 'Controller Multiverse',
    tag: ['3D'],
    author: 'The flow',
    imgSrc:
      'https://i.vimeocdn.com/video/1810445538-a293e1d8fc71d5fc2cb4dbcdfb7633fe82a36571c43585120fe0b90fef1aed34-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/950452744/rendition/1080p/file.mp4?loc=external&signature=a7e6edacc05ca24fafc9b70ee6e836952031d1f5d0f6f0e00213d0180fd4aada',
  },
  {
    title: 'Into the Multiverse',
    tag: ['3D'],
    author: 'The flow',
    imgSrc:
      'https://i.vimeocdn.com/video/1810445434-012ae658ae044bfa5086c6a77e6e8db7ebd6e36310e63dd41691096ce0b02c15-d_1920x1080',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/920421848/rendition/1080p/file.mp4?loc=external&signature=940a8d750d3971eafc13162c5afa3456bbc6359a4d2d3c3ea8fe03511dc75a53',
  },
]

export const WORK_DATA: DataType[] = [...TYPE_3D, ...TYPE_MOTION, ...TYPE_VFX]
