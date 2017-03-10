rm todoApp.apk
ionic build android --release --prod
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk todoApp
/Users/nicobytes/Library/Android/sdk/build-tools/25.0.2/zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk todoApp.apk