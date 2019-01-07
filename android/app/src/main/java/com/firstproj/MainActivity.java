// package com.firstproj;

// import com.facebook.react.ReactActivity;

// public class MainActivity extends ReactActivity {

//     /**
//      * Returns the name of the main component registered from JavaScript.
//      * This is used to schedule rendering of the component.
//      */
//     @Override
//     protected String getMainComponentName() {
//         return "FirstProj";
//     }
// }

protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new RNPedometerPackage(this)
        );
    }
…
@Override
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        Boolean can = StepCounterOldService.deviceHasStepCounter(this.getPackageManager());
/* Если в устройстве есть датчик шагов, то запускаем сервис использующий его */
        if (!can) {
            startService(new Intent(this, StepCounterService.class));
        } else {
/* Иначе запускаем сервис использующий акселерометр*/
            startService(new Intent(this, StepCounterOldService.class));
        }
    }