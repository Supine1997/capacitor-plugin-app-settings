# App Settings

打开原生设置的capacitor插件。

## 安装

```shell script
npm install git+http://192.168.3.168:12000/tool/capacitor-plugin-app-settings.git
```

## 配置

### Android
> `android/app/src/main/java/com/globletech/petid/MainActivity.java`
```java
import com.globletech.plugins.appsettings.AppSettings;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
            add(AppSettings.class);
        }});
    }
}
```

## 例子
```typescript
import {Plugins} from "@capacitor/core";

const {AppSettings} = Plugins;

AppSettings.openAppSettingsOfOS();
```

## 接口

### openAppSettingsOfOS()

```
openAppSettingsOfOS(): Promise<void>
```

## 提及
[Flutter App Settings Plugin](https://github.com/spencerccf/app_settings)
