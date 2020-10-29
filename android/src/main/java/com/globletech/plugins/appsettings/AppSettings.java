package com.globletech.plugins.appsettings;

import android.content.Intent;
import android.net.Uri;
import android.provider.Settings;

import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin
public class AppSettings extends Plugin {

    @PluginMethod
    public void openAppSettingsOfOS(PluginCall call) {
        Intent intent = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        Uri uri = Uri.fromParts("package", this.getBridge().getActivity().getPackageName(), null);
        intent.setData(uri);
        this.getBridge().getActivity().startActivity(intent);
        call.success();
    }
}
