<nav id="menu">
    <h2><?php echo e(trans('home.menu')); ?></h2>
    <ul>
        <?php if(Auth::check()): ?>
            <li class="info-img-name">
                <?php echo Html::image(Auth::user()->image); ?>

                <span>
                    <?php echo e(Auth::user()->name); ?>

                </span>
            </li>
        <?php endif; ?>
        <li>
            <a href="<?php echo e(action('SurveyController@getHome')); ?>">
                <?php echo e(trans('home.home')); ?>

            </a>
        </li>
        <li>
            <a href="<?php echo e(action('SurveyController@create')); ?>">
                <?php echo e(trans('home.create_survey')); ?>

            </a>
        </li>
        <li>
            <a href="<?php echo e(action('User\UserController@show')); ?>">
                <?php echo e(trans('home.update_info')); ?>

            </a>
        </li>
        <li><a href="<?php echo e((Auth::check()) ?
                action('Auth\LoginController@logout') : action('Auth\LoginController@login')); ?>">
               <?php echo e((Auth::check()) ? trans('home.logout') : trans('home.login')); ?>

            </a>
        </li>
    </ul>
</nav>
