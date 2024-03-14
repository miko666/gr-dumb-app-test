export class NavigationComponent {
  get menuBtn() {
    return $('android=resourceId("com.continuum.emi.calculator:id/btnStart")');
  }

  get emiBtnText() {
    return $('//android.widget.TextView[@text="EMI Calculator"]'); //xpath - check alternative
  }

  get hamburgerBtn() {
    return $('//android.widget.ImageButton[@content-desc="Open navigation drawer"]'); //xpath - check alternative
  }

  get historyBtn() {
    return $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/androidx.appcompat.widget.LinearLayoutCompat[3]/android.widget.CheckedTextView',
    );
  }

  get lastRecord() {
    return $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ListView/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]',
    );
  }
}

export const navComponent = new NavigationComponent();
