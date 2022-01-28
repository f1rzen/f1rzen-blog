import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function MakineOgrenmesi() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Makine Öğrenmesi
          </h1>
          <p className="text-lg leading-7 text-gray-700 dark:text-gray-400">
            <ul>
              <li>
                <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
                  Giriş👋
                </h2>
                <ul>
                  <li>
                    <h4>
                      <a href="https://f1rzen.com/blog/machine-learning/neden_makine_ogrenmesi">
                        {' '}
                        ‣ Neden Makine Öğrenmesi?{' '}
                      </a>
                    </h4>
                    <h4>
                      <a href="#"> ‣ Neden Python?</a>
                    </h4>
                    <h4>
                      <a href="#"> ‣ scikit-learn</a>
                    </h4>
                    <h4>
                      <a href="#"> ‣ Gerekli Kütüphaneler Ve Araçlar</a>
                    </h4>
                    <h4>
                      <a href="#"> ‣ İlk Adımlar: İris Klasifikasyonu</a>
                    </h4>
                  </li>
                </ul>
              </li>
              <li>
                <del>
                  <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
                    Supervised Learning
                  </h2>
                </del>
              </li>
              <ul>
                <li>
                  <h4>
                    <a href="#"></a>
                  </h4>
                </li>
              </ul>
            </ul>
          </p>
        </div>
      </div>
    </>
  )
}
