import Title from "../common/Title";
import styles from "./links.module.scss";
import Button from "../common/Button";

function HeroBottomMessage(props) {
  return (
    <div class={styles.message}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <rect width="32" height="32" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlink:href="#image0_306_2935" transform="scale(0.01)" />
          </pattern>
          <image
            id="image0_306_2935"
            width="100"
            height="100"
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAKR0lEQVR4nO2cbWwcxRnH/8/enhMSxy93dpJGlNDaUUVDk/huHaJiVBKVkKaCEAimUlWJF6UoBfVDpaJA1S8gFUqLRFUIRaqAquqbE15KBCZNm6PFuMje3SOikSDJudBQEmzfnc8kIMd3+/TDXVvj7Oxd7vZmT8r8JH/ZmZ35n/+anZlnXgCFQqFQKBQKhUKhUCgUCoVCoagCClqAiEnTvIKAzdC0LgCLfCr2YzhOipkPdPT2jvhUpq80nCFZ217pMP8awFX1rIeBv1Kh8K3o+vUn6lnP+dJQhkxa1mUEvApgqaQqTzHzxg7DeFtSfWXxzZATw8MXLQ6HY0y04n+Fa9rp2bNn7WUbNnxY7n02zXCW6O8MxP3SVCFmhPnLZBizkut1RfejkEnTvIKIBhi4ZO5zZoYeDp9Nm+Z9UcN4xKuMLLAzADMAwMgCOwHsCaDuc6i5hZwYHr5o0YIFb2OeGfNgx3E2dfb2vuqaeOzYgkwudxxEF9eqpyqY34+0tnbTqlUzgdQ/B63WAhaHwzF4mwEApGnaDaLEdC53Z2BmAADRxelc7s7A6p9D4J361OHDnyvk84cBLAlYypkCsG5pPH48SBE1t5BayCaTlxby+RcRvBkAsDgEPJe17ZVBigikhYwfOdKszczcBuYfEtAZhAYPxhm431m48FdLV68+Lbvyig3JDQ9H8k1NNzJRDxFV909k1glYycAXACyuqgx5nCHgHQbeA1G+mgKYeYKI7JCuP9e2Zk22kncqMmTSNL9LRA8AaKlGmAI5Bn7QEY8/Xi5jWUPSpvkIiL7nj64Lnp9E4/F7vDJ4GjJpWdsJeM5fTb5xGsAYgHFiPgMATLQYxbDL5wE0B6hNiEO0rTMWe1GU7jlTJ+B+/yVVzUkA+wEcQqEwXC4omB4Z+Szp+pXMvBHA9QCWyxBZDo35AQBCQ4QtZDyZXBVynKN1UVU5zMBLGtGe9uPH/0T9/YWqCkkk9Gxz82bWtO8A2IqA518h5u42w0i5pQlbiM7czfXTVAmDGtG97bHY4VoLoo0b8wBeBvBydnS0x9G0BwFcW7PCKikQrQLgaohwYsiOE9Q3+CQDN0bj8a1+mDGf9t7eZDQe3wKiHQBOVVnMNDHf5TCvcJhXMHA3gI8qfptZOBH2JdrrFwQkCszf7DSMk/WuKxqLPfuRbf/tbHEx7LxaCxF9IxKPD8559Hh6dPQoNO0AavwcBho6mccz7dPTm2WY8V+WxGITkVTq6wCerPgl5iORWGxw/uNob+9BADUvdDVEC2GihzpisXsrzZ9+440W0vWroGmXO8BKAK2lpJwGvAfH+Qfn869FN2yYLlcW9fcXmHlX2rZzBHjOEYov0PseqScAXFbRjxAQuCHM/IuOeLysGZxI6NnW1h0M3A7mTQyEwHzO94EBgAgIh/Npy/oLgKcjqdQ+rxEaETEz787YdjuKi1ViiNbxkSNNtHr12U/Ve+zYgsz09Lpyv6McwX6yiA5Gx8buLpctbds7Mi0t7zDz78B8DYBQBaXrKPYNv093db0zaVk3ekshjqRSuwAc8iyVeVlmZuZHzEz/f8SUmZ5+ED7sBRB2QGnTvBlEA7VW4MHJWV1ft3zt2nFRhtzwcKTQ1PQUE23zqc7nQ+HwHV6BvvGRkeUhXX8TzMu8CiKiV9lxXgAAJtpOwFcqVsHcHzWMvW5JgbUQBu7yMmPcsrrzCxaM+mgGAGx3ZmdHpkyzS5Rh6fr1p1AcxnrCzFeD6FEQPXpeZpQhGEOIXu6Ix58XJY9bVncIeA3FmJSvMNBdIHrNy5RoLLYPwAG/666EIAxhDbhPlJgbHo6Eiv+MesaePuMQvZJNJttEGRzm+1AaI8hEuiEMvOQ1Ay80NT2FOrQMFx3djuP8UpTeaRg2iM6Zb9Qb6YZoRML9T2nTvNnnPqMcN02apnA3DDE/IVELAPmGnGzP5Q66JXAioYPoIcl6QEQP88CA6zC6nfkAAOHAox7INmR/KfJ6DtnW1h2Q8KlyYVWmq+smtwQyjFkw75cpRrYhwkkXA7fLFDKP20QJVG6i6DNyDdH1190eZ0yzFcybpGr5NF+dGBoShcSHZAqRacjpyJo1/xak9aGycEi90EOLFvW5JbTH4ycAnJElRJ4hzMeJyH1cr2mXS9MhgtlVQ0mz6+pePZBnCFFGlOQ4zqXSdIg0AEINBKRl6ZBmCDGLlziJGmFvr9cmwMqXZ2ukkVYMFZBoCHu1Aq/WIw/x6iKRtC20Mjv1iFCEpr0rTYdIAyDUwB7a66BDEkTdc1fZPkWh8JY0HQIYcNVQ0iwM1fuNzD6kOTM66npsjQuFIQBVbfn3iVnnk09cJ61TyeQlkHh0QmqnTrp+pdvz0u4QqSGKefy5s6/PtR9jZtcJY72Qakhp47OIp6QJmQ/z08IkQGpIR/aw93pOJFy3HkVSqX0EyD9wyXw0MjbmeuSCTTPMwHUy5cg2ZHm2uXmzWwL19xeYaLdkPXA07fuiPVtZoi2yz0DKX8ItHglwJRqLPQtAuPnBd4j2eh2eYUCotV4EMVPfmh0d7RElhsLhO6R8upiPkuMIdylOWFYcwJa665hHEIZQ6XyGK21r1mQ15i0onpiqFx+EwuEtEcPIiTJoREKN9SSoWNa1adt2XTYFgDbDSIWYr6pLS2E+GtL1vra1a/8pypK2rP7SllXpBBdcZH5sfGREuPeqzTBSpGm9AJ71rU6ivQSs9zJjwrZXAPi5b3WeJ0FGe5eHQqHfiHZ8AEB7T89UNB7fwczbARyruibmow7Rtmgs1u/1meJEQifm30LeBWrnEHT4fVOmq+sJYYyrRIdhvBBJpS4DcAuAV1BZmGUWwCCY+yNjY1/0Gk0BpR3sLS1P+rlPtxoCPx8CYGfatrPMvFu4xIviPAXAAICBiaGhJaFFi/rAfHlppW/ugZ13GXirsHDhUKV3lTAzZWz7YQS78wVAYxgCAu7J2PZSTiR2ivZtzaUUdxos/dUEDwyEMra9B8C3ay3LD4L+ZM3l1mxr68FSpyqFU4cPL810dw+iQcwAGssQMPPVGmCnbXtHvetKW1Z/OJ9/K6jhrYiGMgQAwLwMzHvTlnVgwjRjfhc/YVnxtGUdBPAHBDiaEtEQfYiAzRrRNWnbHiTmJ9qnp1+ppH9xo3QF7RYGdgH4ms86faWRDQEAAvNWBrZmWlrG06a5n4BDpGmvt/X0/Es0KmNmmkomL2HmPgY2pYHrGvDmOleE4//JZHIblQ41NihnULyeaYKKVzWBi1cydaK4Bu7XffG+w5p2Q0dPzx/d0rxayAd10uMXiwF8CQjg3FmNsOMILx8QdurRqakkJG6hvICY7Eil3hQlCg0pdaCP1UXSBQwT/czrVgnPYe/HMzM/JsDyX9YFy+hHudxPvTKUvUpo2jQ78pq2l5mv9k/XBcmhMPMtLYYx6ZWporudSsG3mwHcCqJYuWsnFCWIPgRgwXGeicTj+7yCpwqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKLz5D9Hgoxi5HyxVAAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>

      <p>אשמח לתפוס את הרגע שלכם</p>
    </div>
  );
}

export default function Links(props) {
  return (
    <div class={styles.mainContainer}>
      <div class={styles.overlay}></div>
      <div class={styles.overlayBottom}></div>
      <img class={styles.imgoverlay} src="/hero-overlay.png" alt="" />
      <img class={styles.img} src="/hero-bg2.png" alt="צילום טבע" />

      <div class={styles.container}>
        <Title size="big" weight="bold">
          לירון סטודיו נייד
        </Title>
        <Title size="h2" weight="reg">
          מצלם ב-
        </Title>
        <Title weight="bold" size="h3">
          <span class={styles.stroke}>סטודיו | טבע | אירועים ומגנטים</span>
        </Title>
      </div>

      <div class={styles.social} >
        <a href="#gallery" style="display:none">
          <div class={styles.socialItem}>
            <div class={styles.socialIconWrapper}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="32" height="32" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_306_3045"
                      transform="scale(0.01)"
                    />
                  </pattern>
                  <image
                    id="image0_306_3045"
                    width="100"
                    height="100"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAKR0lEQVR4nO2cbWwcxRnH/8/enhMSxy93dpJGlNDaUUVDk/huHaJiVBKVkKaCEAimUlWJF6UoBfVDpaJA1S8gFUqLRFUIRaqAquqbE15KBCZNm6PFuMje3SOikSDJudBQEmzfnc8kIMd3+/TDXVvj7Oxd7vZmT8r8JH/ZmZ35n/+anZlnXgCFQqFQKBQKhUKhUCgUCoVCoagCClqAiEnTvIKAzdC0LgCLfCr2YzhOipkPdPT2jvhUpq80nCFZ217pMP8awFX1rIeBv1Kh8K3o+vUn6lnP+dJQhkxa1mUEvApgqaQqTzHzxg7DeFtSfWXxzZATw8MXLQ6HY0y04n+Fa9rp2bNn7WUbNnxY7n02zXCW6O8MxP3SVCFmhPnLZBizkut1RfejkEnTvIKIBhi4ZO5zZoYeDp9Nm+Z9UcN4xKuMLLAzADMAwMgCOwHsCaDuc6i5hZwYHr5o0YIFb2OeGfNgx3E2dfb2vuqaeOzYgkwudxxEF9eqpyqY34+0tnbTqlUzgdQ/B63WAhaHwzF4mwEApGnaDaLEdC53Z2BmAADRxelc7s7A6p9D4J361OHDnyvk84cBLAlYypkCsG5pPH48SBE1t5BayCaTlxby+RcRvBkAsDgEPJe17ZVBigikhYwfOdKszczcBuYfEtAZhAYPxhm431m48FdLV68+Lbvyig3JDQ9H8k1NNzJRDxFV909k1glYycAXACyuqgx5nCHgHQbeA1G+mgKYeYKI7JCuP9e2Zk22kncqMmTSNL9LRA8AaKlGmAI5Bn7QEY8/Xi5jWUPSpvkIiL7nj64Lnp9E4/F7vDJ4GjJpWdsJeM5fTb5xGsAYgHFiPgMATLQYxbDL5wE0B6hNiEO0rTMWe1GU7jlTJ+B+/yVVzUkA+wEcQqEwXC4omB4Z+Szp+pXMvBHA9QCWyxBZDo35AQBCQ4QtZDyZXBVynKN1UVU5zMBLGtGe9uPH/0T9/YWqCkkk9Gxz82bWtO8A2IqA518h5u42w0i5pQlbiM7czfXTVAmDGtG97bHY4VoLoo0b8wBeBvBydnS0x9G0BwFcW7PCKikQrQLgaohwYsiOE9Q3+CQDN0bj8a1+mDGf9t7eZDQe3wKiHQBOVVnMNDHf5TCvcJhXMHA3gI8qfptZOBH2JdrrFwQkCszf7DSMk/WuKxqLPfuRbf/tbHEx7LxaCxF9IxKPD8559Hh6dPQoNO0AavwcBho6mccz7dPTm2WY8V+WxGITkVTq6wCerPgl5iORWGxw/uNob+9BADUvdDVEC2GihzpisXsrzZ9+440W0vWroGmXO8BKAK2lpJwGvAfH+Qfn869FN2yYLlcW9fcXmHlX2rZzBHjOEYov0PseqScAXFbRjxAQuCHM/IuOeLysGZxI6NnW1h0M3A7mTQyEwHzO94EBgAgIh/Npy/oLgKcjqdQ+rxEaETEz787YdjuKi1ViiNbxkSNNtHr12U/Ve+zYgsz09Lpyv6McwX6yiA5Gx8buLpctbds7Mi0t7zDz78B8DYBQBaXrKPYNv093db0zaVk3ekshjqRSuwAc8iyVeVlmZuZHzEz/f8SUmZ5+ED7sBRB2QGnTvBlEA7VW4MHJWV1ft3zt2nFRhtzwcKTQ1PQUE23zqc7nQ+HwHV6BvvGRkeUhXX8TzMu8CiKiV9lxXgAAJtpOwFcqVsHcHzWMvW5JgbUQBu7yMmPcsrrzCxaM+mgGAGx3ZmdHpkyzS5Rh6fr1p1AcxnrCzFeD6FEQPXpeZpQhGEOIXu6Ix58XJY9bVncIeA3FmJSvMNBdIHrNy5RoLLYPwAG/666EIAxhDbhPlJgbHo6Eiv+MesaePuMQvZJNJttEGRzm+1AaI8hEuiEMvOQ1Ay80NT2FOrQMFx3djuP8UpTeaRg2iM6Zb9Qb6YZoRML9T2nTvNnnPqMcN02apnA3DDE/IVELAPmGnGzP5Q66JXAioYPoIcl6QEQP88CA6zC6nfkAAOHAox7INmR/KfJ6DtnW1h2Q8KlyYVWmq+smtwQyjFkw75cpRrYhwkkXA7fLFDKP20QJVG6i6DNyDdH1190eZ0yzFcybpGr5NF+dGBoShcSHZAqRacjpyJo1/xak9aGycEi90EOLFvW5JbTH4ycAnJElRJ4hzMeJyH1cr2mXS9MhgtlVQ0mz6+pePZBnCFFGlOQ4zqXSdIg0AEINBKRl6ZBmCDGLlziJGmFvr9cmwMqXZ2ukkVYMFZBoCHu1Aq/WIw/x6iKRtC20Mjv1iFCEpr0rTYdIAyDUwB7a66BDEkTdc1fZPkWh8JY0HQIYcNVQ0iwM1fuNzD6kOTM66npsjQuFIQBVbfn3iVnnk09cJ61TyeQlkHh0QmqnTrp+pdvz0u4QqSGKefy5s6/PtR9jZtcJY72Qakhp47OIp6QJmQ/z08IkQGpIR/aw93pOJFy3HkVSqX0EyD9wyXw0MjbmeuSCTTPMwHUy5cg2ZHm2uXmzWwL19xeYaLdkPXA07fuiPVtZoi2yz0DKX8ItHglwJRqLPQtAuPnBd4j2eh2eYUCotV4EMVPfmh0d7RElhsLhO6R8upiPkuMIdylOWFYcwJa665hHEIZQ6XyGK21r1mQ15i0onpiqFx+EwuEtEcPIiTJoREKN9SSoWNa1adt2XTYFgDbDSIWYr6pLS2E+GtL1vra1a/8pypK2rP7SllXpBBdcZH5sfGREuPeqzTBSpGm9AJ71rU6ivQSs9zJjwrZXAPi5b3WeJ0FGe5eHQqHfiHZ8AEB7T89UNB7fwczbARyruibmow7Rtmgs1u/1meJEQifm30LeBWrnEHT4fVOmq+sJYYyrRIdhvBBJpS4DcAuAV1BZmGUWwCCY+yNjY1/0Gk0BpR3sLS1P+rlPtxoCPx8CYGfatrPMvFu4xIviPAXAAICBiaGhJaFFi/rAfHlppW/ugZ13GXirsHDhUKV3lTAzZWz7YQS78wVAYxgCAu7J2PZSTiR2ivZtzaUUdxos/dUEDwyEMra9B8C3ay3LD4L+ZM3l1mxr68FSpyqFU4cPL810dw+iQcwAGssQMPPVGmCnbXtHvetKW1Z/OJ9/K6jhrYiGMgQAwLwMzHvTlnVgwjRjfhc/YVnxtGUdBPAHBDiaEtEQfYiAzRrRNWnbHiTmJ9qnp1+ppH9xo3QF7RYGdgH4ms86faWRDQEAAvNWBrZmWlrG06a5n4BDpGmvt/X0/Es0KmNmmkomL2HmPgY2pYHrGvDmOleE4//JZHIblQ41NihnULyeaYKKVzWBi1cydaK4Bu7XffG+w5p2Q0dPzx/d0rxayAd10uMXiwF8CQjg3FmNsOMILx8QdurRqakkJG6hvICY7Eil3hQlCg0pdaCP1UXSBQwT/czrVgnPYe/HMzM/JsDyX9YFy+hHudxPvTKUvUpo2jQ78pq2l5mv9k/XBcmhMPMtLYYx6ZWporudSsG3mwHcCqJYuWsnFCWIPgRgwXGeicTj+7yCpwqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKLz5D9Hgoxi5HyxVAAAAAElFTkSuQmCC"
                  />
                </defs>
              </svg>
            </div>
            גלריה
          </div>
       </a>

        <a href="tel:0503395555">
            <div class={styles.socialItem}>

            <div class={styles.socialIconWrapper}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.30023 9.32046C5.53437 14.1853 9.50998 18.053 14.4522 20.1488L14.4678 20.1554L15.4226 20.5809C16.6383 21.1226 18.0674 20.7379 18.8469 19.6591L20.4398 17.4544C20.5371 17.3197 20.5121 17.1325 20.3828 17.0281L17.6018 14.7846C17.4636 14.6731 17.2603 14.6991 17.1545 14.8418L16.0722 16.3023C15.8094 16.657 15.3347 16.7802 14.9325 16.5982C11.237 14.9258 8.26733 11.9562 6.59491 8.26065C6.4129 7.85845 6.53614 7.38376 6.89083 7.1209L8.3513 6.03858C8.49401 5.93282 8.51999 5.72954 8.40846 5.59129L6.16466 2.80999C6.06037 2.68072 5.87319 2.65561 5.73853 2.75283L3.52191 4.35302C2.43592 5.13701 2.05348 6.57807 2.6078 7.79738L3.29948 9.31883C3.29973 9.31937 3.29998 9.31991 3.30023 9.32046ZM13.7123 21.8716C8.34226 19.5922 4.02306 15.3884 1.5955 10.1012L1.59404 10.098L0.900914 8.57337C-0.0229611 6.54118 0.614449 4.13942 2.42443 2.83278L4.64104 1.23258C5.58369 0.55207 6.89398 0.727826 7.62397 1.63269L9.86778 4.414C10.6485 5.38171 10.4666 6.80471 9.46769 7.54501L8.63081 8.1652C10.0445 10.9082 12.2849 13.1487 15.0279 14.5623L15.6481 13.7254C16.3884 12.7265 17.8114 12.5446 18.7791 13.3253L21.5601 15.5688C22.4652 16.299 22.6407 17.6098 21.9596 18.5525L20.3667 20.7572C19.0675 22.5553 16.6858 23.1965 14.6595 22.2936L13.7123 21.8716Z"
                    fill="white"
                />
                </svg>
            </div>
            שיחה
            </div>
        </a>

        <a href="https://instagram.com/liron__young_photographer" target="_blank" rel="noopener nofollow">
            <div class={styles.socialItem}>
            <div class={styles.socialIconWrapper}>
                <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M20.0001 8.75006C20.0001 8.0597 20.5597 7.50006 21.2501 7.50006C21.9405 7.50006 22.5001 8.0597 22.5001 8.75006C22.5001 9.44041 21.9405 10.0001 21.2501 10.0001C20.5597 10.0001 20.0001 9.44041 20.0001 8.75006Z"
                    fill="#BCEC3E"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.0001 9.06256C11.7209 9.06256 9.06261 11.7209 9.06261 15.0001C9.06261 18.2792 11.7209 20.9376 15.0001 20.9376C18.2793 20.9376 20.9376 18.2792 20.9376 15.0001C20.9376 11.7209 18.2793 9.06256 15.0001 9.06256ZM10.9376 15.0001C10.9376 12.7564 12.7564 10.9376 15.0001 10.9376C17.2438 10.9376 19.0626 12.7564 19.0626 15.0001C19.0626 17.2437 17.2438 19.0626 15.0001 19.0626C12.7564 19.0626 10.9376 17.2437 10.9376 15.0001Z"
                    fill="#BCEC3E"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.5729 3.54133C17.2397 3.05703 12.7605 3.05703 8.42732 3.54133C5.91225 3.82242 3.88183 5.80369 3.58614 8.33185C3.06797 12.7622 3.06797 17.2379 3.58614 21.6683C3.88183 24.1964 5.91225 26.1777 8.42732 26.4588C12.7605 26.9431 17.2397 26.9431 21.5729 26.4588C24.088 26.1777 26.1184 24.1964 26.4141 21.6683C26.9323 17.2379 26.9323 12.7622 26.4141 8.33185C26.1184 5.80369 24.088 3.82242 21.5729 3.54133ZM8.63558 5.40472C12.8304 4.93589 17.1699 4.93589 21.3647 5.40472C23.0273 5.59055 24.3592 6.90257 24.5518 8.54966C25.053 12.8353 25.053 17.1648 24.5518 21.4505C24.3592 23.0975 23.0273 24.4096 21.3647 24.5954C17.1699 25.0642 12.8304 25.0642 8.63558 24.5954C6.97295 24.4096 5.64109 23.0975 5.44844 21.4505C4.9472 17.1648 4.9472 12.8353 5.44844 8.54966C5.64109 6.90257 6.97295 5.59055 8.63558 5.40472Z"
                    fill="#BCEC3E"
                />
                </svg>
            </div>
            אינסטגרם
            </div>
        </a>

        <a href="https://facebook.com/lironstudiopic" target="_blank" rel="noopener nofollow">
            <div class={styles.socialItem}>
            <div class={styles.socialIconWrapper}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="26"
                viewBox="0 0 15 26"
                fill="none"
                >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.60961 2.73461C6.84032 1.5039 8.50952 0.8125 10.25 0.8125H13.625C14.1428 0.8125 14.5625 1.23223 14.5625 1.75V6.25C14.5625 6.76777 14.1428 7.1875 13.625 7.1875H10.25C10.2003 7.1875 10.1526 7.20725 10.1174 7.24242C10.0823 7.27758 10.0625 7.32527 10.0625 7.375V9.8125H13.625C13.9137 9.8125 14.1863 9.9455 14.3639 10.1731C14.5416 10.4006 14.6045 10.6973 14.5345 10.9774L13.4095 15.4774C13.3052 15.8947 12.9302 16.1875 12.5 16.1875H10.0625V24.25C10.0625 24.7678 9.64277 25.1875 9.125 25.1875H4.625C4.10723 25.1875 3.6875 24.7678 3.6875 24.25V16.1875H1.25C0.732233 16.1875 0.3125 15.7678 0.3125 15.25V10.75C0.3125 10.2322 0.732233 9.8125 1.25 9.8125H3.6875V7.375C3.6875 5.63452 4.3789 3.96532 5.60961 2.73461ZM10.25 2.6875C9.0068 2.6875 7.81451 3.18136 6.93544 4.06044C6.05636 4.93951 5.5625 6.1318 5.5625 7.375V10.75C5.5625 11.2678 5.14277 11.6875 4.625 11.6875H2.1875V14.3125H4.625C5.14277 14.3125 5.5625 14.7322 5.5625 15.25V23.3125H8.1875V15.25C8.1875 14.7322 8.60723 14.3125 9.125 14.3125H11.768L12.4243 11.6875H9.125C8.60723 11.6875 8.1875 11.2678 8.1875 10.75V7.375C8.1875 6.82799 8.4048 6.30339 8.79159 5.91659C9.17839 5.5298 9.70299 5.3125 10.25 5.3125H12.6875V2.6875H10.25Z"
                    fill="white"
                />
                </svg>
            </div>
            פייסבוק
            </div>
        </a>

    </div>

      <div class={styles.cta_buttons}>
        <Button link="https://wa.me/+972503395555" bg="#" withIcon={true}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M8.60741 6.46231C8.83611 6.46844 9.08966 6.48081 9.33089 7.01628C9.49086 7.37276 9.76033 8.02901 9.97985 8.56359C10.1507 8.97958 10.2912 9.32189 10.3264 9.39195C10.4068 9.55195 10.4563 9.73657 10.3511 9.95195C10.3387 9.97735 10.327 10.0016 10.3158 10.025C10.2314 10.2 10.1714 10.3246 10.0296 10.4874C9.97133 10.5543 9.91059 10.6277 9.85008 10.7009C9.74365 10.8295 9.63791 10.9572 9.54728 11.0475C9.38653 11.2074 9.21951 11.3799 9.405 11.6999C9.5906 12.0199 10.2399 13.0723 11.1983 13.9217C12.2287 14.839 13.1247 15.2256 13.5777 15.4211C13.6656 15.459 13.7368 15.4897 13.7891 15.5157C14.1107 15.6757 14.3024 15.6511 14.4879 15.4357C14.6735 15.2203 15.2917 14.5002 15.5082 14.1802C15.7184 13.8602 15.9348 13.9094 16.2317 14.0202C16.5285 14.1309 18.1114 14.9064 18.4329 15.0664C18.4965 15.098 18.5559 15.1265 18.611 15.153C18.8348 15.2603 18.9868 15.3332 19.0513 15.4419C19.1317 15.5773 19.1317 16.2174 18.8658 16.9682C18.5938 17.7191 17.2828 18.4392 16.6892 18.4945C16.633 18.4998 16.5771 18.5066 16.5195 18.5136C15.9755 18.5794 15.2849 18.6629 12.8245 17.6944C9.79278 16.5022 7.7915 13.5442 7.38689 12.9462C7.35494 12.899 7.33295 12.8665 7.32119 12.8507L7.31434 12.8416C7.13026 12.5952 6.00407 11.0883 6.00407 9.53356C6.00407 8.04603 6.73685 7.27158 7.07109 6.91834C7.09227 6.89595 7.11185 6.87526 7.12954 6.85618C7.4263 6.53618 7.77265 6.45618 7.98904 6.45618C8.20553 6.45618 8.42192 6.45618 8.60741 6.46231Z"
              fill="#BCEC3E"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.230195 24.1643C0.127924 24.5355 0.466035 24.8782 0.838595 24.7809L6.59777 23.2766C8.41571 24.2613 10.4625 24.7844 12.5464 24.7844H12.5525C19.41 24.7844 25 19.2268 25 12.3953C25 9.08418 23.7075 5.96992 21.3578 3.63114C19.0082 1.29246 15.8854 0 12.5524 0C5.69506 0 0.105103 5.55756 0.105103 12.3892C0.104324 14.5625 0.677972 16.6978 1.76846 18.5806L0.230195 24.1643ZM3.57611 19.0786C3.70964 18.5939 3.64294 18.076 3.39098 17.6409C2.46579 16.0435 1.97944 14.2319 1.9801 12.3892C1.9801 6.60198 6.72169 1.875 12.5524 1.875C15.3898 1.875 18.0369 2.97123 20.0351 4.96007C22.031 6.94671 23.125 9.58263 23.125 12.3953C23.125 18.1824 18.3834 22.9094 12.5525 22.9094H12.5464C10.7757 22.9094 9.03576 22.4648 7.4908 21.6279C7.07264 21.4014 6.58404 21.3423 6.12392 21.4624L2.67092 22.3644L3.57611 19.0786Z"
              fill="#BCEC3E"
            />
          </svg>
          וואטסאפ
        </Button>
      </div>
      <HeroBottomMessage />
    </div>
  );
}
