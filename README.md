# React Native Scaffold

## Usage

```bash
    npx react-native init Awesome --template react-native-scaffold
```

### Github

[React-Native-Scaffold](https://github.com/dcdaniiel/react-native-scaffold)

### Error project init 
> if your have problem with project init please follow this steps:

> 1: Open this file in your project:
```
    android/app/src/debug/java/com/"NAME_PROJECT"/ReactNativeFlipper
```
> 2: Change line number 14 and 34
```
14 ->  import com.facebook.flipper.plugins.dataNAME_PROJECT.DataNAME_PROJECTFlipperPlugin
34 ->  client.addPlugin(new DataNAME_PROJECTsFlipperPlugin(context));
```
> 3: To
```
14 ->  import com.facebook.flipper.plugins.databases.DatabasesFlipperPlugin;
34 ->  client.addPlugin(new DatabasesFlipperPlugin(context));
```
