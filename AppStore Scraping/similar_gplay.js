const gplay = require('google-play-scraper');
const fs = require('fs');

const fields = [
  'appId',
  'url',
  'title',
  'description',
  'summary',
  'installs',
  'minInstalls',
  'maxInstalls',
  'score',
  'scoreText',
  'ratings',
  'reviews',
  'price',
  'free',
  'developer',
  'developerId',
  'developerWebsite',
  'genre',
  'updated',
  'editorsChoice',
  'screenshots',
  'video',
  'videoImage'
]

const appIds = ['com.techroid.fakechat',
  'com.glip.mobile',
  'anima.virtual.ai.robot.friend',
  'com.lightspace.lmk',
  'video.tiki',
  'com.Seriously.Phoenix',
  'com.sogon.episode',
  'io.vina',
  'com.getyourmarriageon.chat',
  'org.addingstrengthtomarriages.ultimateintimacy2',
  'com.hip.coupleapp',
  'com.bumble.app',
  'com.cocoplay.girlssquad',
  'com.dior.kFriends',
  'com.nhn.android.navercafe',
  'com.talkenglish.conversation',
  'ai.boyfriend.virtual.dating.lover.iboy',
  'com.internetdesignzone.bffdressup',
  'br.com.tapps.sosocial2',
  'com.becloser',
  'com.jmm.couplegame',
  'com.narvii.amino.master',
  'com.tlive.madcat',
  'com.drugscom.app',
  'madiva.com.talkenglishconversation',
  'com.justunfollow.android',
  'com.zynga.words3',
  'app.getcoral.m',
  'com.faithcircle.community',
  'studio.genius.bishoujogame',
  'com.cudu.conversationenglish',
  'com.socialmedia.socialmediapostmaker',
  'younow.live',
  'com.tonitmedia.tonit',
  'com.adhoclabs.burner',
  'com.discord',
  'com.plato.android',
  'com.cudu.conversationkorean',
  'co.vero.app',
  'com.bereal.ft',
  'com.hubolabs.hubo',
  'com.twofasapp',
  'com.sproutsocial.android',
  'com.lego.common.legolife',
  'com.nf.heyy',
  'com.andromo.dev682265.app1072421',
  'com.talkatone.android',
  'co.me3app.me3',
  'com.pixsterstudio.authenticator',
  'io.couply.android',
  'com.getpaired.app',
  'com.happyverse.bfftest',
  'com.anthillinc.whatifi.app',
  'com.twocatsapp.ombroamigo',
  'net.wrightflyer.le.reality',
  'com.gettr.gettr',
  'com.apphi.android.post',
  'io.friendly',
  'com.resqwalk',
  'com.vkontakte.android',
  'com.wallet.crypto.trustapp',
  'com.twitter.android',
  'com.bemyeyes.bemyeyes',
  'com.patook.patook',
  'com.translate.talkingtranslator',
  'com.sgiggle.production',
  'tv.twitch.android.app',
  'co.yellw.yellowapp',
  'com.allapps.allinone.android',
  'com.cudu.conversationjapanese',
  'kr.co.vcnc.android.couple',
  'socialpilot.co',
  'com.firstdata.fdgs.authenticare2',
  'com.clouthub.clouthub',
  'com.duosecurity.duomobile',
  'com.my.high.school.choices.days.chapter.story',
  'me.unfollowers.droid',
  'ai.replika.app',
  'co.ninecount.wink',
  'co.spotafriend.google',
  'com.patreon.android',
  'com.instagram.android',
  'com.zynga.wwf2.free',
  'im.kumu.ph',
  'com.drpu.truestcheatingquotesbasic',
  'com.hily.app',
  'com.arthurivanets.owly',
  'com.azure.authenticator',
  'com.hootsuite.droid.full',
  'com.zhiliaoapp.musically',
  'com.nhn.android.band',
  'com.google.android.apps.giant',
  'me.zepeto.main',
  'net.milkdrops.beentogether',
  'com.favary.flsignal',
  'com.google.android.apps.authenticator2',
  'com.myyearbook.m',
  'com.desireapps.desire',
  'com.lastpass.authenticator',
  'enterprises.dating.boo',
  'com.getyourmarriageon.iu',
  'walkie.talkie.talk',
  'com.myanna.virtualbestfriend',
  'com.Seriously.BestFiends',
  'macrostudios.howwelldoyouknowme',
  'com.snapchat.android',
  'uhiveapp.uhive.com.uhive',
  'com.idealmatch.idma',
  'com.badfrog.conspiracy.app',
  'com.rayandating.seriousRelationship',
  'com.ikeyboard.theme.best.friends',
  'com.nextdoor',
  'com.realu.dating',
  'com.guppir.swipr',
  'com.Love.Story.Games.Teenage.Drama',
  'com.mm.parentconcern',
  'com.minds.mobile',
  'com.musiciansfriend.mobile.app',
  'world.playme.mechat',
  'net.datchat.datchat',
  'com.lasting.lasting',
  'com.Uturo',
  'eu.deeper.fishdeeper',
  'com.genius.revive',
  'com.zoho.zohosocial',
  'jp.co.cybird.appli.android.bks.en',
  'com.ripl.android',
  'org.buffer.android',
  'dh3games.bfffriendshiptest',
  'com.slowlyapp',
  'com.dalsgames.collegelovegame',
  'com.socialmediavideoadsmaker',
  'com.okta.android.auth',
  'digital.ohg.lovesim',
  'me.id.auth',
  'com.salesforce.authenticator',
  'com.pinterest',
  'com.web_view_mohammed.ad.webview_app',
  'eu.siacs.conversations',
  'com.reddit.frontpage',
  'com.tracfone.straighttalk.myaccount',
  'com.talkenglish.practice',
  'com.remind101',
  'com.mewe',
  'sg.bigo.live',
  'com.planet.pinponapp',
  'net.cooltweens.crush_on_bestie_two',
  'app.zenly.locator',
  'com.life360.android.safetymapd',
  'com.acehardware.rewards',
  'com.vimeo.android.videoapp',
  'video.like',
  'com.cudu.conversationspanish',
  'com.deepercoupleappandroid',
  'io.roadstr.app',
  'com.teampeanut.peanut',
  'com.webmd.android',
  'co.benx.weverse',
  'com.towneers.www',
  'com.ifriend.app',
  'com.truthsocial.android.app',
  'net.cooltweens.crush_on_bestie',
  'in.synchronise.findfriends',
  'mytown.friendshouse.free',
  'com.nyxcore.chalang',
  'com.quack.app',
  'io.dlive',
  'atws.app',
  'com.influenster',
  'com.ikeyboard.theme.best.friend.forever']

concat_data();

async function concat_data() {
  for (idx in appIds) {
    try {
      get_data(appIds[idx]);
    }
    catch (e) {
      console.log(e, idx);
    }
  }
  console.log('SUCCESS');
}

var aggrData = "center node," + fields.join(',') + "\n";

async function get_data(appId) {
  var data = gplay.similar({
    appId: appId, fullDetail: true
  });

  data.then(function (res) {
    let csv = [];
    for (let i = 0; i < res.length; i++) {
      let row = [];
      row.push(appId);
      for (let key in fields) { row.push(res[i][fields[key]]); }
      csv.push(row.map(function (item) {
        strRow = item ? '' + item + '' : '.';
        strRow = strRow.replaceAll(",", "\\");
        strRow = strRow.replace(/\r?\n|\r/g, " ");
        return strRow;
      }).join(','));
    }
    csv_data = csv.join('\n');
    return csv_data;
  }).then(function (csv_data) {
    aggrData += csv_data + "\n";
    return aggrData;
  }).then(function (aggrData) {
    fs.writeFileSync('./output/similar_gplay.csv', aggrData);
  })
}