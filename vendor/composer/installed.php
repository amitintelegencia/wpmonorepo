<?php return array(
    'root' => array(
        'pretty_version' => 'dev-main',
        'version' => 'dev-main',
        'type' => 'library',
        'install_path' => __DIR__ . '/../../',
        'aliases' => array(),
        'reference' => '9ca5f34d9edbc50cf86e3eedf6bd899f2400480d',
        'name' => '__root__',
        'dev' => true,
    ),
    'versions' => array(
        '__root__' => array(
            'pretty_version' => 'dev-main',
            'version' => 'dev-main',
            'type' => 'library',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'reference' => '9ca5f34d9edbc50cf86e3eedf6bd899f2400480d',
            'dev_requirement' => false,
        ),
        'symplify/monorepo-builder' => array(
            'pretty_version' => '11.2.20',
            'version' => '11.2.20.0',
            'type' => 'library',
            'install_path' => __DIR__ . '/../symplify/monorepo-builder',
            'aliases' => array(),
            'reference' => '444efe08701776cb1a03b9f3600e715697519aa6',
            'dev_requirement' => true,
        ),
        'your-monorepo/first-package' => array(
            'dev_requirement' => false,
            'replaced' => array(
                0 => 'dev-main',
            ),
        ),
        'your-monorepo/second-package' => array(
            'dev_requirement' => false,
            'replaced' => array(
                0 => 'dev-main',
            ),
        ),
    ),
);
